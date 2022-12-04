# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/custom-actions


# This is a simple example for a custom action which utters "Hello World!"

from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from courses import Courses
from learningProgram import LearningProgram
from courses import Courses
from courseData import CourseData

class ActionCourses(Action):

	def name(self) -> Text:
		return "action_courses"

	def run(self, dispatcher: CollectingDispatcher,
			tracker: Tracker,
			domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
		course=tracker.latest_message['text']
		temp = Courses(course)
		temp0 = temp[0]['attributes']['name']
		temp1 = temp[1]['attributes']['name']
		dispatcher.utter_template("utter_courses",tracker,course=temp0+','+temp1)
		return []

class ActionLearningObject(Action):

	def name(self) -> Text:
		return "action_learning"

	def run(self, dispatcher: CollectingDispatcher,
			tracker: Tracker,
			domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
		role=tracker.latest_message['text']
		print(role)
		lis = list(role.split(" "))
		length = len(lis)
		finalrole = lis[length-1]
		temp = LearningProgram(finalrole)
		courses = []
		for data in temp:
			if data['attributes']['tags'][0] == finalrole:
				name = data['attributes']['localizedMetadata'][0]['name']
				coursesLearning = data['relationships']['subLOs']['data']
				for course in coursesLearning:
					print(course)
					courseData = CourseData(course['id'])
					courses.append(courseData['attributes']['localizedMetadata'][0]['name'])
				courseName = ','.join(courses)
		dispatcher.utter_template("utter_learning",tracker,learningProgram=name,course=courseName)
		return []

class ActionCourseDetail(Action):

	def name(self) -> Text:
		return "action_courseDetail"

	def run(self, dispatcher: CollectingDispatcher,
			tracker: Tracker,
			domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
		courseData = CourseData('course:3445405')
		name = courseData['attributes']['localizedMetadata'][0]['name']
		duration = str(courseData['attributes']['duration']) + 'hours'
		rating = str(courseData['attributes']['rating']['averageRating'])
		users = str(courseData['attributes']['rating']['ratingsCount'])
		dispatcher.utter_template("utter_coursedetails",tracker,name=name,duration=duration,rating=rating,users=users)
		return []
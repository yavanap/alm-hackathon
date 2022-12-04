Rasa is an open source machine learning framework for building AI assistants and chatbots.
Rasa is an effective and time-efficient tool to build complex chatbots and works out of the box in dialogue management.

# ALM Chatbot based out of Rasa
As part of creating a Chatbot for ALM using Rasa, 
- we have created new Intents that learner would ask a ALM Chatbot - for our usecases
- Update the Corresponding (utter) responses
- Custom Actions which internally uses ALM APIs
- Create stories with intents, response and actions

### Setup Rasa and Run the demo
```
python -m pip install rasa

rasa init

rasa shell

rasa run actions
```
### Sample Chat with Rasa Bot
```
Your input ->  Hi
Hello! Hope are you are doing good, I am your ALM Skill Assistant, let me know how can I help?
Your input ->  what are the courses available for my career
What is your next role
Your input ->  Going to become an Architect
For your next role we have a learning Program 'Architect' and here are some courses under it 'Digital Poster Design: Combining Images & Type for Powerful Visuals'
Your input ->  give me more details on the course
For the course 'Digital Poster Design: Combining Images & Type for Powerful Visuals' the duration is '350 hours' with ratings of '9' by 10 users.Do you want to enroll?
```

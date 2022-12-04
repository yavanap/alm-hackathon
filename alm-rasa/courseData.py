import requests

def CourseData(courseId):
    print('Into Course Action')
    api_address='https://learningmanagerapac.adobe.com/primeapi/v2/learningObjects/'
    url = api_address + courseId + '?access_token=d3d9f15a0c3cbb8b38a03d038f1f6a24' 
    json_data = requests.get(url).json()
    format_add = json_data['data']
    print(format_add)
    return format_add
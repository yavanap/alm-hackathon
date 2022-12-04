import requests

def LearningProgram(role):
    print('Into Course Action')
    api_address='https://learningmanagerapac.adobe.com/primeapi/v2/learningObjects?access_token=d3d9f15a0c3cbb8b38a03d038f1f6a24&filter.loTypes=learningProgram&filter.tagName='
    url = api_address + role
    json_data = requests.get(url).json()
    format_add = json_data['data']
    print(format_add)
    return format_add
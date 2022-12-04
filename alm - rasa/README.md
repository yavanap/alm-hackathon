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

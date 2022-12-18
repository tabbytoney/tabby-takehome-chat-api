# Notes/Instructions/Start Here

## Requirements:
I have added the below requirements throughout the code in comments. You can search the number or line of text to find it in the repo. 

1. App has users
2. App has conversations
3. App has messages
4. Messages are associated with a user and a conversation
5. Messages have a timestamp
6. Conversations have participant (users) and messages
7. Users are participants in conversations, they can send and receive messages
8. API supports getting a list of conversations that could be consumed by a UI
9. Above list of conversations can accept parameters which allow for filtering conversations by user and/or range of time 
10. API supports sending/receiving messages
11. API supports searching conversations for a particular string

Bonus: I have connected a Mongo database, using mongoose. I have also added user auth with JWT tokens. I have set up socketio on the server side for real time messaging capability - it can't really be tested without a frontend setup.

## To run locally:
I created the server with ExpressJS
1. You will need the .env that will be included in my submission email. Please contact me if you have issues with it or don't receive it. 
2. cd into the root folder. 
3. npm i to install all dependencies
4. Restart terminal
5. npm start

## Testing
I have created a Postman collection that you should be able to use for testing, it will also be included in the email (again let me know if you dont receive it). Once you download it, all you have to do is open Postman > Click Import > select that file. 

<img width="1600" alt="Import Collection to Postman" src="https://user-images.githubusercontent.com/60009709/208323395-89a91f59-7aba-4e39-be6b-5de28afa9bda.png">

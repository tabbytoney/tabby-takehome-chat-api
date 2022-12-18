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

Bonus: 
I have connected a Mongo database, using mongoose. 
I have also added very simple user auth with JWT tokens. 
I have set up socketio on the server side for real time messaging capability - it can't really be tested without a frontend setup.

## To run locally:
I created the server with ExpressJS
1. You will need the .env that will be included in my submission email. Please contact me if you have issues with it or don't receive it. 
2. cd into the root folder. 
3. npm i to install all dependencies
4. Restart terminal
5. npm start

## Testing
I have created a Postman collection that you should be able to use for testing, it will also be included in the email (again let me know if you dont receive it). Once you download it, all you have to do is open Postman > Click Import > select that file. 

<img width="1600" alt="Import Collection to Postman" src="https://user-images.githubusercontent.com/60009709/208324207-7a93369f-c53b-4ac4-9005-ef2677dd199d.png">

You'll need to register or log in a user to get their auth token. After that, for the other calls, paste the token into Authorization tab > dropdown select Bearer Token. 

<img width="1728" alt="pasting the token" src="https://user-images.githubusercontent.com/60009709/208324234-cbecae5b-8e07-4a5b-ac83-001c50c54618.png">


## If I had more time...
If I had more time, I would:
1. Add a full front end could be built out, consuming the created API - I usually use axios. If time allows I'll add a simplistic frontend.
2. More error handlers. I used express-async-handler to mostly handle that part, but with more time I'd actually create error middleware to make the errors more concise.
3. Add ability for each user to upload their own avatar images. There are third party tools for this - I've heard of people using Cloudinary. 
4. Encrypting the chats would be good for sensitive messages or workplaces. 
5. More detailed searches - not just search terms but by dates sent or a limit to how many search results return (this would be needed if a user had a LOT of messages that would need to be loaded)
6. End-to-end testing with an automation tool such as Cypress, Playwright, Puppeteer (with Jest)
7. Functionality for group chats would be pretty easy to add to have messages between more than two users. 
8. Real time notifications to show on the app and also on the browser tab.

## General Notes:
- I normally don't clutter the code with this many comments but I wished to err on the side of overcommunication in case a choice was unclear. 
-I decided to break up the controllers into their own file. I've done projects where everything was included in the Routes files, but they quickly became giant and difficult to manage. 



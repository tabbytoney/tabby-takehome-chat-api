const express = require('express');
const { convos } = require('./dummyData/dummyData');
const dotenv = require('dotenv');
const dbConnection = require('./dbConfig/database');

dotenv.config();
dbConnection();
const app = express();

// the apis
app.get('/', (req, res) => {
  res.send('Running the api successfully');
});

// get all chats
app.get('/convo', (req, res) => {
  res.send(convos);
});

// get just one chat by id
app.get('/convo/:id', (req, res) => {
  // if a chat matches the id entered, send the info
  const singleConvo = convos.find((cv) => (cv._id = req.params.id));
  //   console.log(req.params.id);
  res.send(singleConvo);
});

const port = process.env.PORT;

app.listen(port, console.log(`We started the server on port ${port}!`));

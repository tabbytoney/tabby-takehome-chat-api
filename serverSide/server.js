const express = require('express');
const { convos } = require('./dummyData/dummyData');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const dbConnection = require('./dbConfig/database');
const convoRoutes = require('./routes/convoRoutes');

dotenv.config();
dbConnection();
const app = express();

app.use(express.json());

// the apis
app.get('/', (req, res) => {
  res.send('Running the api successfully');
});

app.use('/user', userRoutes);
app.use('/convo', convoRoutes);

const port = process.env.PORT;

app.listen(port, console.log(`We started the server on port ${port}!`));

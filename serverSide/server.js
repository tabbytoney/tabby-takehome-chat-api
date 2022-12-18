const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const dbConnection = require('./dbConfig/database');
const msgRoutes = require('./routes/msgRoutes');
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
app.use('/msg', msgRoutes);

const port = process.env.PORT;

app.listen(port, console.log(`We started the server on port ${port}!`));

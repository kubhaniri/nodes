const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routesV1 = require('./routes/V1');

dotenv.config();

const app = express();

const mongoConnexionString = process.env.MONGO;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

routesV1(app);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(mongoConnexionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to mingodb');
    app.listen(PORT, () => {
      console.log('Running on ', PORT);
    });
  })
  .catch(error => {
    console.log('mongodb connexion error: ', error);
  });
/*
app.listen(PORT, () => {
  console.log('Running on Port:', PORT);
});
*/

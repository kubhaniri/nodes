const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routesV1 = require('./routes/V1');

dotenv.config();

const app = express();

console.log('DB connexion : ', process.env.MONGO);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

routesV1(app);

app.listen(4000, () => {
  console.log('Running on Port:4000');
});

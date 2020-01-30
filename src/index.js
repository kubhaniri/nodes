const express = require('express');
const routesV1 = require('./routes/V1');

const app = express();

routesV1(app);

app.listen(4000, () => {
  console.log('Running on Port:4000');
});

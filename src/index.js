const express = require('express');

const { countries, languages } = require('countries-list');
const { info } = require('./module/mymod.js');

const app = express();
app.get('/', (request, response) => {
  response.status('200').send('Firmin Est Present');
});

app.get('/info', (request, response) => {
  response.send(info("Firmin's Info"));
});

app.get('/country', (request, response) => {
  //console.log('request.query :', request.query);
  response.json(countries[request.query.code]);
  //response.send(JSON.stringify(countries[request.query.code]));
});

app.get('/languages/:lang/:gh', (request, response) => {
  //console.log('request.params  ', request.params);
  const lang = languages[request.params.lang];
  if (lang) {
    response.json({ status: 'OK', message: lang });
  } else {
    response.status(404).json({
      status: 'NOT_FOUND',
      message: `language${request.params.lang}not found`
    });
  }
});

app.get('*', (request, response) => {
  response.status('404').send('Firmin Est En Mode Invisible');
});

app.listen(4000, () => {
  console.log('Running on Port:4000');
});

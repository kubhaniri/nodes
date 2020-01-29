const express = require('express');
/*
var module_http= require('http');
var module_fs= require('fs');
var module_url= require('url');
var module_querystring= require('querystring'); */
const { info, err } = require('./module/mymod.js');
const { countries, languages } = require('countries-list');

const app = express();
app.get('/', (request, response) => {
  response.status('200').send('Firmin Est Present');
});

app.get('/info', (request, response) => {
  response.send(info("Firmin's Info"));
});

app.get('/country', (request, response) => {
  console.log('request.query :', request.query);
  response.json(countries[request.query.code]);
  //response.send(JSON.stringify(countries[request.query.code]));
});

app.get('/languages/:lang', (request, response) => {
  console.log('request.params  ', request.params);
  response.json(languages[request.params.lang]);
  //response.send(JSON.stringify(countries[request.query.code]));
});

app.get('*', (request, response) => {
  response.status('404').send('Firmin Est En Mode Invisible');
});

app.listen(4000, () => {
  console.log('Running on Port:4000');
});

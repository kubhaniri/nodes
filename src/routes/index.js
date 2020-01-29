const { countries, languages } = require('countries-list');

const routes = app => {
  app.get('/', (request, response) => {
    response.status('200').send('Firmin Est Present');
  });

  app.get('/info', (request, response) => {
    response.send("Firmin's Info");
  });

  app.get('/country', (request, response) => {
    response.json(countries[request.query.code]);
  });

  app.get('/languages/:lang/:gh', (request, response) => {
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
};

module.exports = routes;

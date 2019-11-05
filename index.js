const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

// arquivos estáticos
app.use(express.static('static'));

// templates
nunjucks.configure('views', {
  autoescape: true,
  express: app,
});

app.use('/', require('./src/routes'));

// página 404 padrão
app.use((req, res) => res.status(404).json({erro: 'Recurso não encontrado',}));

const port = 21020;
app.listen(port, () => {
  console.log(`Running on ${port}`);
});

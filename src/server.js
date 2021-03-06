const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

// TODO - WHITELIST

// const server = require('http').Server(app);

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());


app.use(require('./routes'));

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

const { PORT } = process.env;

app.listen(PORT || 8000, () => {
  // eslint-disable-next-line no-console
  console.log(`server is listening on port ${PORT || 8000}`);
});

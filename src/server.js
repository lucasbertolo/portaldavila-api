const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

// TODO - WHITELIST

// const server = require('http').Server(app);


// middlewares

app.use(express.json());
// app.use(express.urlencoded({extended: true}))


app.use(require('./routes'));

const { PORT } = process.env;

app.listen(8000, () => {
  // eslint-disable-next-line no-console
  console.log(`server is listening on port ${PORT}`);
});

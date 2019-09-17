const express = require('express');
// const db = require("./db");
// const path = require('path');
// const cors = require('cors');

const app = express();

// app.use(cors());

// TODO - WHITELIST

// const server = require('http').Server(app);


// middlewares

app.use(express.json());
// app.use(express.urlencoded({extended: true}))


app.use(require('./routes'));

app.listen(3000);

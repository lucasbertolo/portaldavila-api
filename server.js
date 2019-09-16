const express = require("express");
const path = require('path');
const cors = require('cors');

const app = express();

app.use(cors());

//TODO WHITELIST 

const server = require('http').Server(app); 


//middlewaress

app.use(express.json());
app.use(express.urlencoded({extended: true})) //conseguir baixar arquivos do usuario


app.use(require('./routes')); //pega as rotas 

server.listen(process.env.PORT || 3000); //ouve tanto websockets quanto http

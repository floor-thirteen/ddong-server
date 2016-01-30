/* jshint esnext: true, node:true */
'use strict';

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const fs = require('fs');

const app = express();
const users = {};
const controllers = fs.readdirSync('./controllers');

const Parse = require('parse/node').Parse;
Parse.initialize(process.env.Parse_Key_Application,
    process.env.Parse_Key_Javascript,
    process.env.Parse_Key_Master);

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: true}) );

app.set('port', (process.env.PORT || 5000));

controllers.forEach((controller) => {
    require(`./controllers/${controller}`)({
        app
    });
});

app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`);
});

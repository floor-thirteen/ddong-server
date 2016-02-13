/* jshint esnext: true, node:true */
'use strict';

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const fs = require('fs');
const path = require('path');

const app = express();
const users = {};
const base = path.dirname(process.mainModule.filename);
const controllers = fs.readdirSync('./controllers');

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: true}) );

app.set('port', (process.env.PORT || 5000));

controllers.forEach((controller) => {
	const name = controller.match(/^(.+)\.js$/)[1];
    require(`./controllers/${controller}`)({
        app,
        base,
        name
    });
});

app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`);
});

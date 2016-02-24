/* jshint esnext: true, node:true */
'use strict';

const express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    uuid = require('uuid'),
    app = express(),
    db = require('./db.js')()

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: true}) );

app.set('port', (process.env.PORT || 5000));

require('./controllers.js')({
    app,
    db
});

app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`);
});

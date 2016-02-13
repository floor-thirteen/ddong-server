/* jshint esnext: true, node:true */
'use strict';

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const app = express();
const users = {};

const Parse = require('parse/node').Parse;
Parse.initialize(process.env.Parse_Key_Application,
    process.env.Parse_Key_Javascript,
    process.env.Parse_Key_Master);

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: true}) );

app.set('port', (process.env.PORT || 5000));

//placeholder get
app.get('/', (req, res) => {
    var ok = (result) => {
        res.send(result);
    };
    Parse.Push.send({
        where: {
        },
        data: {
        }
    }, {
        success: function() {
            // Push was successful
            ok("Sweet memes are made of dreams");
        },
        error: function(error) {
            // Handle error
            ok(error);
        }
    });
});

app.post('/', (req, res) => {

    res.send({
        maymays: 'kek',
    });
});

app.listen(app.get('port'), () => {
  console.log(`Node app is running on port ${app.get('port')}`);
});

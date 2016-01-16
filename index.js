/* jshint esnext: true, node:true */
'use strict';

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const uuid = require('uuid');

const app = express();
const users = {};

const Parse = require('parse').Parse;
Parse.initialize("eT8HUCePhitJSxgQSQOjRFko38GIbNUJu9AxNGeE",
    "NaDZMVWeFm79BBaim8nd0yqtyHJTDww4Ne2Ww6T5");


app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: true}) );

app.set('port', (process.env.PORT || 5000));

//placeholder get
app.get('/', (req, res) => {
    res.send({'memes':true});
    Parse.Push.send({
        data: { }
    }, {
        success: function() {
            // Push was successful
        },
        error: function(error) {
            // Handle error
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

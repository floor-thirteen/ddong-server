/*jshint esnext: true, node: true*/
module.exports = exports = () => {
    'use strict';
    const pg = require('pg');
    const CONNECTION_STRING = process.env.PG_DB_Connection_String;

    const query = (queryStr, params) => {
        return new Promise((resolve, reject) => {
            pg.connect(CONNECTION_STRING, (err, client, done) => {
                if(err) {
                   done();
                   reject(err);
                   return;
                }

                client.query(queryStr, params, (err, result) => {
                    done();
                    if(err) return reject(err);
                    resolve(result.rows);
                });
            });
        });
    };

    //add the user to the DB. If it works it returns true, otherwise false.
    const join = (username, password) => {
        return query('INSERT INTO Users(address, secret) values($1, $2)', [username,password])
            .then(() => true);
    };

    //checks if the users credentials are correct - returns true if it works, false otherwise
    const checkUser = (username, password) => {
        return query('SELECT address FROM Users WHERE address = $1 AND secret = $2', [username, password])
            .then((rows) => Boolean(rows[0]) );
    };


    //init function - create the tables if required
    (() => {
        //create the table for the users
        query('CREATE TABLE IF NOT EXISTS Users (' +
            'address VARCHAR(36) PRIMARY KEY,' +
            'secret  VARCHAR(36) )')
            .catch((err) => {console.log(err);});
    }());

    return {
        join,
        checkUser,
    };
};

'use strict';
const express = require('express');
//const serverless = require('serverless-http');
const app = express();

app.get('/', function(req, res) {

    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'zenonpa',
        password: 'arret123BC',
        server: 'pvsafety.cgkpwxttheg4.us-east-1.rds.amazonaws.com',
        database: 'pvsafety'
    };

    // connect to your database
    sql.connect(config, function(err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select [name], [xtype] from sysobjects', function(err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
});

module.exports = app;
//module.exports.handler = serverless(app);
'use strict';

const config = require('../config/config.js').config;
const Zendesk = require('zendesk-node-api');

const zendesk = new Zendesk({
    url: config.url, 
    email: config.email, 
    token: config.token 
});

module.exports.create = (event, context, callback) => {
    zendesk.tickets.create({
        subject: 'A new ticket',
        comment: {
            body: 'A ticket created with zendesk-node-api'
        }
    }).then(function (result) {
        if (result == true) {
            const response = {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'Zendesk Created !',
                    input: event
                }),
            };
            callback(null, response);
        }
        console.log(result);
    });
};

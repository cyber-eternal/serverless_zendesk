'use strict';
const config = require('../config/config.js').config;
const Zendesk = require('zendesk-node-api');

const zendesk = new Zendesk({
    url: config.url, 
    email: config.email, 
    token: config.token 
});

module.exports.delete = (event, context, callback) => {
    zendesk.objects.delete(OBJECT_ID).then(function (result) {
        if (result == true) {
            const response = {
                statusCode: 200,
                body: JSON.stringify({
                    message: 'Zendesk Deleted !',
                    input: event
                }),
            };
            callback(null, response);
        }
    });


};

'use strict';
const config = require('../config/config.js').config;
const Zendesk = require('zendesk-node-api');

const zendesk = new Zendesk({
    url: config.url, 
    email: config.email, 
    token: config.token 
});

module.exports.list = (event, context, callback) => {
    zendesk.objects.show(OBJECT_ID).then(function(result){
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Zendesk List!',
                input: event
            })
        };
        callback(null, response);
        console.log(result);   
     });
};

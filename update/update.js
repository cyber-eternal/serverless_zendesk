'use strict';
const config = require('../config/config.js').config;
const Zendesk = require('zendesk-node-api');

const zendesk = new Zendesk({
    url: config.url, 
    email: config.email, 
    token: config.token 
});


module.exports.update = (event, context, callback) => {
    zendesk.objects.update(OBJECT_ID, {}).then(function(result){
        const response = {
            statusCode: 200,
            body: JSON.stringify({
              message: 'Zendesk Updated !',
              input: event
            }),
          };
          callback(null, response);
        console.log(result);
    })
};

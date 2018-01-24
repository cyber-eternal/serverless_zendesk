'use strict';

const Zendesk = require('zendesk-node-api');

const zendesk = new Zendesk({
    url: YOUR_ZENDESK_URL, // https://example.zendesk.com
    email: YOUR_ZENDESK_EMAIL, // me@example.com
    token: YOUR_ZENDESK_API_TOKEN // hfkUny3vgHCcV3UfuqMFZWDrLKms4z3W2f6ftjPT
});




module.exports.list = (event, context, callback) => {
    zendesk.objects.list(
        // (Optional) URL params available for each object.
        // https://developer.zendesk.com/rest_api/docs/core/
    ).then(function (result) {
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

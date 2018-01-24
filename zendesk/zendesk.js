'use strict';

var zendesk = require('node-zendesk');
// var client = zendesk.createClient({
//   username:  'username',
//   token:     'token',
//   remoteUri: 'https://remote.zendesk.com/api/v2'
// });
 
// client.users.list(function (err, req, result) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(JSON.stringify(result[0], null, 2, true));//gets the first page
// });


module.exports.foo = (event, context, callback) => {
 
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Zendesk is connected!',
      input: event
    }),
  };

  callback(null, response);

};

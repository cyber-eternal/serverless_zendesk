'use strict';







/////////////////////////////
//// Create Brand   //////
///////////////////////////


// const config = require('../config/config.js').config;
// var request = require('request');

// let url = config.brandsUrl;
// let auth = {
//     username: config.email,
//     password: config.pass
// }
// let data = {
//     "brand":
//         {
//             "name": "test",
//             "subdomain": "testerson"
//         }
// }
// request.post({ url: url, auth: auth, qs: data }, (error, req, body) => {
//     if (error) {
//         console.log(error);
//     }
//     console.log(body);
// })



















// request.get(url, (error, response, body) => {
//     if (error) {
//         console.log(error);
//     };
//     console.log(response);
//     console.log(body);
// });
// or
// request.get('https://lstones1.zendesk.com/api/v2/brands.json', {
//     'auth': {
//         'username': 'don.edgar@mail.ru',
//         'password': 'qwerty##'
//     },
//     "brand": { "name": "TESSST1", "subdomain": "tessstsss" }
// }, (error, response, body) => {
//     if (error) {
//         console.log(error);
//     };
//     console.log(response);
//     console.log(body);
// });
// or
// request.get('http://some.server.com/').auth(null, null, true, 'bearerToken');
// // or
// request.get('http://some.server.com/', {
//     'auth': {
//         'bearer': 'bearerToken'
//     }
// });







// var Zendesk = require('node-zendesk');

// var zendesk = Zendesk.createClient({
//     username: 'don.edgar@mail.ru',
//     token: 'aOqHWIZr6kBielikZvswf8S3D1YmwNyR91MzRfEd',
//     remoteUri: "https://lstones1.zendesk.com/api/v2"
// });



// client.organizations.list((err, statusCode, body, responseList, resultList) => {
//     console.log(statusCode);
//     console.log(body)
//     // console.log(JSON.stringify(result[0], null, 2, true));//gets the first page
// });

// zendesk.organizations.list( (err, req, result) => {
//     console.log(result)
//     // console.log(JSON.stringify(result[0], null, 2, true));//gets the first page
// });

// zendesk.organizations.list( (err, req, result) => {
//     console.log(result)
//     // console.log(JSON.stringify(result[0], null, 2, true));//gets the first page
// });

//   zendesk.tickets.list(function (err, statusList, body, responseList, resultList) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(body);
//     // console.log(responseList);
//     // console.log(resultList);
//   });

// zendesk.users.list(function (err, req, result) {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(JSON.stringify(result[0], null, 2, true));//gets the first page
//   });




module.exports.show = (event, context, callback) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Zendesk List!',
            input: event
        })
    };
    callback(null, response);
};




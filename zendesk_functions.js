'use strict';

const config = require('../config/config.js').config;
var request = require('request');


/////////////////////////////
//// Create Brand   //////
///////////////////////////

function createBrand() {
    return new Promise((resolve, reject) => {
        try {
            let url = config.brandsUrl;
            let auth = {
                username: config.email,
                password: config.pass
            }
            let data = {
                "brand":
                    {
                        "name": "test",
                        "subdomain": "testerson"
                    }
            }
            request.post({ url: url, auth: auth, qs: data }, (err, req, body) => {
                if (err) {
                    reject(err);
                }
                resolve(body);
            })
        } catch (err) {
            reject(err);
        }
    });

}

/////////////////////////////
//// Create Number   //////
///////////////////////////


function createPhoneNumber() {
    return new Promise((resolve, reject) => {
        try {
            let url = config.phoneNumberUrl;
            let auth = {
                username: config.email,
                password: config.pass
            }
            let data = {
                "phone_number": {
                    "id": 1,
                    "number": "+16674015276",
                    "token": config.token
                }
            }
            request.post({ url: url, auth: auth, qs: data }, (err, req, body) => {
                if (err) {
                    reject(err);
                }
                resolve(body);
            })
        } catch (err) {
            reject(err);
        }
    });

}





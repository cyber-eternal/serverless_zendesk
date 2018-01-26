'use strict';

const config = require('./config/config.js').config;
const Zendesk = require('zendesk-node-api');

const zendesk = new Zendesk({
    url: config.url,
    email: config.email,
    token: config.token
});

/////////////////////////////
//// get all tickets //////
///////////////////////////

function getAllTickets() {
    return new Promise((resolve, reject) => {
        try {
            zendesk.tickets.list().then(function (result) {
                resolve(result);
            });
        } catch (err) {
            reject(err);
        }
    });
}


/////////////////////////////
//// get all ticket by id //////
///////////////////////////
function getItem() {
    return new Promise((resolve, reject) => {
        try {
            zendesk.tickets.show(OBJECT_ID).then(function (result) {
                if (result == true) {
                    resolve(result);
                } else {
                    reject('Ticket not found');
                }
            });
        } catch (err) {
            reject(err);
        }
    });
}

/////////////////////////////
////Create Ticket //////
///////////////////////////

function createTicket() {
    return new Promise((resolve, reject) => {
        try {
            zendesk.tickets.create({
                subject: 'A new ticket',
                comment: {
                    body: 'A ticket created with zendesk-node-api'
                }
            }).then(function (result) {
                if (result == true) {
                    resolve(result);
                } else {
                    reject(result);
                }
            });
        } catch (err) {
            reject(err);
        }
    });

}
/////////////////////////////
//// Update Ticket by Ticket id //////
///////////////////////////

function updateTicket() {
    return new Promise((resolve, reject) => {
        try {
            zendesk.tickets.update(TICKET_ID, {
                subject: 'An updated subject'
            }).then(function (result) {
                resolve(result);
            });
        } catch (err) {
            reject(err);
        }
    });

}

/////////////////////////////
////Delete Ticket by Ticket id //////
///////////////////////////

function deleteTicket() {
    return new Promise((resolve, reject) => {
        try {
            zendesk.objects.delete(TICKET_ID).then(function (result) {
                if (result == true) {
                    resolve(result);
                } else {
                    reject('Ticket not found');
                }
            });
        } catch (err) {
            reject(err);
        }
    });
}












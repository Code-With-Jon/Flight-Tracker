let Ticket = require('../models/ticket')
let Flight = require('../models/flight')
module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    Ticket.find({}, function (err, tickets) {
        res.render('tickets/new', {
            title: 'New Ticket',
            tickets: tickets,
            id: req.params.id
        }
        )
    })
}


function create(req, res) {
    // req.body.flight.push(req.params.id)
    console.log("REQ BODY: ", req.body)
    console.log("REQ PARAMS: ", req.params)
    req.body.flight = req.params.id
    Ticket.create(req.body, function (err, ticket) {
        console.log("TICKET: ", ticket)
        res.redirect('/flights');
    });
}
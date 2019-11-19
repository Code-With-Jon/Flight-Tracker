let Flight = require('../models/flight')
let Ticket = require('../models/ticket')
module.exports = {
    new: newFlight,
    create,
    index,
    show
}

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    // split if it's not an empty string
    if (req.body.cast) req.body.cast = req.body.cast.split(',');
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    var flight = new Flight(req.body);
    flight.save(function (err) {
        // one way to handle errors
        if (err) return res.render('flights/new');
        console.log(flight);
        // for now, redirect right back to new.ejs
        res.redirect('/flights/');
    });
}

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', { flights });
    })
}

function show(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        Ticket.find({ flight: flight._id }, function (err, tickets) {
            res.render('flights/show', { title: 'Flight Details', flight, tickets });
        });
    });
}
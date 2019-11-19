var mongoose = require('mongoose');
var Schema = mongoose.Schema;


let destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    },
    arrival: {
        type: Date
    }
})

var FlightSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']
    },
    airline: { type: String, enum: ['American', 'Southwest', 'United'] },
    flightNumber: {
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: function () {
            // let departingDate = new Date().now()
            return new Date().setFullYear(new Date().getFullYear() + 1);
        }

    },
    destinations: [destinationSchema]
});

module.exports = mongoose.model('Flight', FlightSchema);
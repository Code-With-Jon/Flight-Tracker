let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/
    },
    price: {
        type: Number,
        min: 0,
        max: 1000000000,
    },
    flight: { type: Schema.Types.ObjectId, ref: 'Flight' }
})

module.exports = mongoose.model('ticket', ticketSchema)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//days of the auction last
let auctionLastDays = 10;

const auctionSchema = Schema({
    name: { type: String, require: [true, 'Auction must has a Name'] },
    city: { type: String, require: [true, 'Auction must has a location'], default: 'Toronto' },
    end_time: { type: Date, require: true, default: Date.now() + (24 * 60 * 60 * 1000 * auctionLastDays) },
    status: { type: Boolean, require: true, default: true }
});

module.exports = mongoose.model('auction', auctionSchema);

const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_CONN);
        console.log('Database Connected');

    } catch (err) {
        console.log('Unable to connect' + err.message);
    }
}

module.exports = connectDB;
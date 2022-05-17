const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({

    urlCode: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },

    longUrl: {
        type: String,
        required: true,
        trim: true
    },

    shortUrl: {
        type: String,
        rewuired: true,
        unique: true
    },

})

module.exports = mongoose.model('url', urlSchema)

// { urlCode: { mandatory, unique, lowercase, trim}, 
// longUrl: { mandatory, valid url }, 
// shortUrl: { mandatory, unique }
// }
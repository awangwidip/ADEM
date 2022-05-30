const mongoose = require('mongoose')

const announcementSchema = new mongoose.Schema({

    announcementName : {
        type : String,
        required : true
    },

    announcementDate : {
        type : Date,
        required : false,
        default : null
    },

    announcementContent : {
        type : String,
        required : true
    }

}
)

module.exports = mongoose.model('announcement', announcementSchema)
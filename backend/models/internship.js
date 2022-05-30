const mongoose = require('mongoose')

const internshipSchema = new mongoose.Schema({

    internshipName : {
        type : String,
        required : true
    },

    internshipDate : {
        type : Date,
        required : false,
        default : null
    },

    internshipContent : {
        type : String,
        required : true
    }

}
)

module.exports = mongoose.model('internship', internshipSchema)
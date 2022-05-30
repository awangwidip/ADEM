const mongoose = require('mongoose')

const compScholarSchema = new mongoose.Schema({

    compScholarName : {
        type : String,
        required : true
    },

    compScholarDate : {
        type : Date,
        required : false,
        default : null
    },

    compScholarContent : {
        type : String,
        required : true
    }

}
)

module.exports = mongoose.model('compScholar', compScholarSchema)
const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({

    newsName : {
        type : String,
        required : true
    },

    newsDate : {
        type : Date,
        required : false,
        default : null
    },

    newsContent : {
        type : String,
        required : true
    }

}
)

module.exports = mongoose.model('news', newsSchema)
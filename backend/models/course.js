const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({

    courseName : {
        type : String,
        required : true
    },

    courseLecturer : {
        type : String,
        required : true
    },

    courseDate : {
        type : Date,
        required : false,
        default : null
    },

    courseLocation : {
        type : String,
        required : true
    }

}
)

module.exports = mongoose.model('course', courseSchema)
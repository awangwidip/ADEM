let cors = require('cors');//
let bodyParser = require('body-parser');

const express = require('express')
const app = express ()

const mongoose = require('mongoose')
const url = 'mongodb://adem:t9rNF7mkJEloHoc68mkffSsP7SoqR3dwGHucMmQI7QSSyjiuk2WI34v8E8eoXY0TcckVyOuDgwcYtbB4uvGNRg==@adem.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@adem@'


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
const dbcon = mongoose.connection


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// app.use(cors()); //
dbcon.on('error', (error) => console.error(error))
dbcon.once('open', () => console.log('Database Connected...'))

app.use(express.json())
app.use(cors()); //


const announcementRouter = require('./routers/announcements')
app.use('/', announcementRouter)

const compScholarRouter = require('./routers/compScholars')
app.use('/', compScholarRouter)

const courseRouter = require('./routers/courses')
app.use('/', courseRouter)

const internshipRouter = require('./routers/internships')
app.use('/', internshipRouter)

const newsRouter = require('./routers/newses')
app.use('/', newsRouter)


 
// listen on port
app.listen(3000, () => console.log('Server Running at http://localhost:3000'));
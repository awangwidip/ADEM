const express = require('express')
const router = express.Router()

const course = require('../models/course')


// to get all data
router.get('/', async(req,res) => {
    course.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
    
    // try {
    //     // const courses = await course.find()
    //     res.json(courses)
    // }
    // catch (error) {
    //     res.status(500).send(error.message)
    

})

// to get certain data by id
router.get('/edit-course/:id', async(req,res) => { //ubah
    try {
        const course = await course.findById(req.params.id)
        res.json(course)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

// add new data
router.post('/create-course', async(req,res) => { //ubah
    try {
        const course = new course({
            courseName : req.body.courseName,
            courseLecturer : req.body.courseLecturer,
            courseDate : req.body.courseDate,
            courseLocation : req.body.courseLocation
        })

        const data = await course.save()
        res.json(data)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

//edit existing data
router.patch('/update-course/:id', async(req,res) => { //ubah patch--> put
    try {
        const course = await course.findById(req.params.id)

        if (req.body.courseName != null) {
            course.courseName = req.body.courseName
        }
        if (req.body.courseLecturer != null) {
            course.courseLecturer = req.body.courseLecturer
        }
        if (req.body.courseDate != null) {
            course.courseDate = req.body.courseDate
        }
        if (req.body.courseLocation != null) {
            course.courseLocation = req.body.courseLocation
        }

        const updated = await course.save()
        res.json(updated)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

// delete existing data
router.delete('/delete-course/:id', async(req,res) => { //ubah
    try {
        const course = await course.findById(req.params.id)
        course.remove()
        res.json({ message : 'course data deleted'})
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router
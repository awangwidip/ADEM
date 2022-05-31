const express = require('express')
const router = express.Router()

const internship = require('../models/internship')
const Internship = require('../models/internship')

// to get all data
router.get('/internship', async(req,res) => {
    internship.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
    
    // try {
    //     // const internships = await internship.find()
    //     res.json(internships)
    // }
    // catch (error) {
    //     res.status(500).send(error.message)
    

})

// to get certain data by id
router.get('/edit-internship/:id', async(req,res) => { //ubah
    try {
        const internship = await Internship.findById(req.params.id)
        res.json(internship)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

// add new data
router.post('/create-internship', async(req,res) => { //ubah
    try {
        const internship = new Internship({
            internshipName : req.body.internshipName,
            internshipDate : req.body.internshipDate,
            internshipContent : req.body.internshipContent
        })

        const data = await internship.save()
        res.json(data)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

//edit existing data
router.patch('/update-internship/:id', async(req,res) => { //ubah patch--> put
    try {
        const internship = await Internship.findById(req.params.id)

        if (req.body.internshipName != null) {
            internship.internshipName = req.body.internshipName
        }
        if (req.body.internshipDate != null) {
            internship.internshipDate = req.body.internshipDate
        }
        if (req.body.internshipContent != null) {
            internship.internshipContent = req.body.internshipContent
        }

        const updated = await internship.save()
        res.json(updated)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

// delete existing data
router.delete('/delete-internship/:id', async(req,res) => { //ubah
    try {
        const internship = await Internship.findById(req.params.id)
        internship.remove()
        res.json({ message : 'internship data deleted'})
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router
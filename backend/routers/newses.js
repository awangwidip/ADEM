const express = require('express')
const router = express.Router()

const newst = require('../models/news')


// to get all data
router.get('/', async(req,res) => {
    newst.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
    
    // try {
    //     // const newsts = await newst.find()
    //     res.json(newsts)
    // }
    // catch (error) {
    //     res.status(500).send(error.message)
    

})

// to get certain data by id
router.get('/edit-newst/:id', async(req,res) => { //ubah
    try {
        const newst = await newst.findById(req.params.id)
        res.json(newst)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

// add new data
router.post('/create-newst', async(req,res) => { //ubah
    try {
        const newst = new newst({
            newstName : req.body.newstName,
            newstDate : req.body.newstDate,
            newstContent : req.body.newstContent
        })

        const data = await newst.save()
        res.json(data)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

//edit existing data
router.patch('/update-newst/:id', async(req,res) => { //ubah patch--> put
    try {
        const newst = await newst.findById(req.params.id)

        if (req.body.newstName != null) {
            newst.newstName = req.body.newstName
        }
        if (req.body.newstDate != null) {
            newst.newstDate = req.body.newstDate
        }
        if (req.body.newstContent != null) {
            newst.newstContent = req.body.newstContent
        }

        const updated = await newst.save()
        res.json(updated)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

// delete existing data
router.delete('/delete-newst/:id', async(req,res) => { //ubah
    try {
        const newst = await newst.findById(req.params.id)
        newst.remove()
        res.json({ message : 'newst data deleted'})
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router
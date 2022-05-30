const express = require('express')
const router = express.Router()

const compScholar = require('../models/compScholar')


// to get all data
router.get('/', async(req,res) => {
    compScholar.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
    
    // try {
    //     // const compScholars = await compScholar.find()
    //     res.json(compScholars)
    // }
    // catch (error) {
    //     res.status(500).send(error.message)
    

})

// to get certain data by id
router.get('/edit-compScholar/:id', async(req,res) => { //ubah
    try {
        const compScholar = await compScholar.findById(req.params.id)
        res.json(compScholar)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

// add new data
router.post('/create-compScholar', async(req,res) => { //ubah
    try {
        const compScholar = new compScholar({
            compScholarName : req.body.compScholarName,
            compScholarDate : req.body.compScholarDate,
            compScholarContent : req.body.compScholarContent
        })

        const data = await compScholar.save()
        res.json(data)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

//edit existing data
router.patch('/update-compScholar/:id', async(req,res) => { //ubah patch--> put
    try {
        const compScholar = await compScholar.findById(req.params.id)

        if (req.body.compScholarName != null) {
            compScholar.compScholarName = req.body.compScholarName
        }
        if (req.body.compScholarDate != null) {
            compScholar.compScholarDate = req.body.compScholarDate
        }
        if (req.body.compScholarContent != null) {
            compScholar.compScholarContent = req.body.compScholarContent
        }

        const updated = await compScholar.save()
        res.json(updated)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

// delete existing data
router.delete('/delete-compScholar/:id', async(req,res) => { //ubah
    try {
        const compScholar = await compScholar.findById(req.params.id)
        compScholar.remove()
        res.json({ message : 'compScholar data deleted'})
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router
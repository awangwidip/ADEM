const express = require('express')
const router = express.Router()

const announcement = require('../models/announcement')
const Announcement = require('../models/announcement')

// to get all data
router.get('/announcement', async(req,res) => {
    announcement.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
    
    // try {
    //     // const announcements = await announcement.find()
    //     res.json(announcements)
    // }
    // catch (error) {
    //     res.status(500).send(error.message)
    

})

// to get certain data by id
router.get('/edit-announcement/:id', async(req,res) => { //ubah
    try {
        const announcement = await Announcement.findById(req.params.id)
        res.json(announcement)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

// add new data
router.post('/create-announcement', async(req,res) => { 
    try {
        const announcement = new Announcement({
            announcementName : req.body.announcementName,
            announcementDate : req.body.announcementDate,
            announcementContent : req.body.announcementContent
        })

        const data = await announcement.save()
        res.json(data)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

//edit existing data
router.patch('/update-announcement/:id', async(req,res) => { //ubah patch--> put
    try {
        const announcement = await Announcement.findById(req.params.id)

        if (req.body.announcementName != null) {
            announcement.announcementName = req.body.announcementName
        }
        if (req.body.announcementDate != null) {
            announcement.announcementDate = req.body.announcementDate
        }
        if (req.body.announcementContent != null) {
            announcement.announcementContent = req.body.announcementContent
        }

        const updated = await announcement.save()
        res.json(updated)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

// delete existing data
router.delete('/delete-announcement/:id', async(req,res) => { //ubah
    try {
        const announcement = await Announcement.findById(req.params.id)
        announcement.remove()
        res.json({ message : 'announcement data deleted'})
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router

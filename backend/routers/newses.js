const express = require('express')
const router = express.Router()

const news = require('../models/news')
const News = require('../models/news')

// to get all data
router.get('/news', async(req,res) => {
    news.find((error, data) => {
        if (error) {
          return next(error)
        } else {
          res.json(data)
        }
      })
    
    // try {
    //     // const newss = await news.find()
    //     res.json(newss)
    // }
    // catch (error) {
    //     res.status(500).send(error.message)
    

})

// to get certain data by id
router.get('/edit-news/:id', async(req,res) => { //ubah
    try {
        const news = await News.findById(req.params.id)
        res.json(news)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

// add new data
router.post('/create-news', async(req,res) => { //ubah
    try {
        const news = new News({
            newsName : req.body.newsName,
            newsDate : req.body.newsDate,
            newsContent : req.body.newsContent
        })

        const data = await news.save()
        res.json(data)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

//edit existing data
router.patch('/update-news/:id', async(req,res) => { //ubah patch--> put
    try {
        const news = await News.findById(req.params.id)

        if (req.body.newsName != null) {
            news.newsName = req.body.newsName
        }
        if (req.body.newsDate != null) {
            news.newsDate = req.body.newsDate
        }
        if (req.body.newsContent != null) {
            news.newsContent = req.body.newsContent
        }

        const updated = await news.save()
        res.json(updated)
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

// delete existing data
router.delete('/delete-news/:id', async(req,res) => { //ubah
    try {
        const news = await News.findById(req.params.id)
        news.remove()
        res.json({ message : 'news data deleted'})
    }
    catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router
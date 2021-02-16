const express = require('express')
const {getBurgers} = require('../models/burger')

const router = express.Router()

router.route('/')
.get((req,res) => {
    
    getBurgers()
    .then((data) => { 
        console.log(data);
        res.render('index', {
        data
        })
    })
    
})
.post((req,res) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router




const express = require('express')
const {getBurgers, insertBurger, updateBurger} = require('../models/burger')

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
    console.log('Burger: ', req.body.burger_name);
    insertBurger(req.body.burger_name)
        .then((results) => {
            res.redirect('/')
        })
  
})
.put((req,res) => {
    console.log('Updating Burger', req.body);
        updateBurger(req.body.devoured, req.body.burger_name)
            .then(() => {
                res.json({result: "Updated"});
             })
            .catch((err) => { 
                console.log(err);
                res.redirect('/')
            })
  
})
module.exports = router




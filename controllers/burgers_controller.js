const express = require('express')
const {burger} = require('../models/burger')

const router = express.Router()

router.route('/home')
.get((req,res) => {
    res.send('I am in the home')
})
module.export = router





// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

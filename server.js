const express = require('express')
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser')
const router = require('./controllers/burgers_controller')

const app = express()
app.use(bodyParser.json())
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'handlebars',
    helpers: {}
})

app.use(router)

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
 




app.listen(3000, () => {
    console.log('listening on port 3000')
})
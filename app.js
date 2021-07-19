// Express
const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')

// Routing
const home = require('./routes/index')

// Application level middleware
app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')

// Error Page
app.use('/'), (req, res) => {
    res.status(404)
    res.render('404')
})

app.listen(PORT, () => {
    console.log(`Listening on port ${port}`)
})
const express = require('express')
const router = express.Router()

router('/', (req, res) => {
    res.render('index', { layout: "index", title: "Home" })
})

module.exports = router
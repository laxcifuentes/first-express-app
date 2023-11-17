// requiring needed modules
const express = require('express')

// initializing the app object
const app = express()

// creating a homepage route
app.get('/', function (req, res) {
    // this gets sent to the client (web browser most likely)
    res.send('Hello World')
})

// second route
app.get('/second', function (req, res)
{
    res.send('This is my second page!')
})

// listen for conections
app.listen(3000)
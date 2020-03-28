const express = require('express')
const app = express()
const api = require('./server/routes/api')
const bodyParser = require("body-parser")


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

// Mongoose setup
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Hackathon2", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/', api)


const port = 4200
app.listen(process.env.PORT || port, function () {
    console.log(`Server running on ${port}`)
})
const express = require('express')
const mongoose = require('mongoose')
const Movie = require('./models/movie')
const movieRouters = require('./routes/movie-routes')


const PORT = 3000
const URL = 'mongodb://localhost:27017/moviebox'

const app = express()
app.use(express.json())
app.use(movieRouters)

mongoose
  .connect(URL)
  .then(console.log('conn with mongoose'))
  .catch(err => console.log(`DB connection error ${err}`))

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`)
})



const express = require('express')
const mongoose = require('mongoose')
const Movie = require('./models/movie')
const movieRouters = require('./routes/movie-routes')


const PORT = 3000
const URL = 'mongodb+srv://velvorin:salamfu6@cluster0.god1w0i.mongodb.net/moviebox?retryWrites=true&w=majority'

const app = express()
app.use(express.json())
app.use(movieRouters)

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log('conn with mongoose'))
  .catch(err => console.log(`DB connection error ${err}`))

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`)
})



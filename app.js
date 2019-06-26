// 1. HACER LAS IMPORTACIONES
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

// 2. CREAR EL SERVIDOR
mongoose.connect('mongodb://localhost/likeapro', { useNewUrlParser: true }, err => {
  if (err) return console.log('Hubo un error', err)
  return console.log('Connected to the DB')
})

const app = express()

// 3. CONFIGURAR EL SERVIDOR
app.use(express.static('public'))

app.set('view engine', 'hbs')
app.set('views', path.join(`${__dirname}/views`))

// 4. RUTAS DEL SERVIDOR
const index = require('./routes/index')
app.use('/', index)

// ULTIMO PASO
app.listen(3000, () => console.log('Running on port http://localhost:3000'))

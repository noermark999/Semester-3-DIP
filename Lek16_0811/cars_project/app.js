//const express = require('express')
import express, { response } from 'express'
import pug from 'pug'
import carsDBFunctions from './service/carsDBFunctions.js'

const app = express()
app.set('view engine', 'pug')

// middleware
// vi skal submitte POST data fra klienten så...
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('assets'))

// endpoints (routes)
app.get('/cars', async (request, response) => {
  let cars = await carsDBFunctions.getCars()
  response.render('cars', { cars: cars })
})

app.get('/cars/:carID', async (request, response) => {
  let car = await carsDBFunctions.getCar(request.params.carID)
  response.render('car', { car: car })
})

app.delete('/cars/:carID', async (request, response) => {
  let car = await carsDBFunctions.deleteCar(request.params.carID)
  response.status(204)
  response.end()
})

app.get('/addCar', (request, response)=> {
  response.render('addcar')
})

app.post('/addCar', (request, response)=>{
  const {brand, model} = request.body
  console.log(`der oprette en ${model} fra ${brand}`)
  
})

app.listen(8000, () => {
  console.log('roads?, where we are going we dont need no roads')
})

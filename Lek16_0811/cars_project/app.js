//const express = require('express')
import express, { response } from 'express'
import pug from 'pug'
import carsDBFunctions from './service/carsDBFunctions.js'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, '/views'))


// middleware
// vi skal submitte POST data fra klienten så...
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/assets'))

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

app.post('/addCar', async (request, response)=>{
  const {brand, model} = request.body
  console.log(`der oprette en ${model} fra ${brand}`)
  let id = await carsDBFunctions.addCar(brand, model)
  response.redirect('/cars')
})

app.get('/editCar/:carID', async (request, response) => {
  let car = await carsDBFunctions.getCar(request.params.carID);
  response.render('editCar', {car: car})
})

app.put('/editCar/:carID', async (request, response) => {
  const carID = request.params.carID
  const {brand, model} = request.body
  const car = {brand: brand, model: model, carID: carID}
  await carsDBFunctions.editCar(car)
  response.status(200)
  response.end()
})

app.listen(7999, () => {
  console.log('roads?, where we are going we dont need no roads')
})

export default(app)
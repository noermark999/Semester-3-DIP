import chai from 'chai'
import supertest from 'supertest'
const assert = chai.assert

import app from "../app.js"
import carsDBFunctions from '../service/carsDBFunctions.js'

describe('Skal kunne test alle get endpoints', ()=>{

    /* Virker ikke :(
    it('should return html', ()=>{
        supertest(app).get('/cars').expect(app.response.status(400))
    })
    */

})
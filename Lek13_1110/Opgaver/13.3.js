const express = require('express');
const { request } = require('http');
const app = express();
let beskedArray = [{
    navn: "Jakob",
    rum: "Rum 1",
    tekst: "Jakob har skrevet en besked her"
}]

app.get('/beskeder', (request, response) => {

    let beskeder = [];
    beskedArray.map(besked => {
        beskeder.push(besked.tekst);
    });
    response.send(beskeder);
})

app.get('/beskeder/:rum', (request, response) => {
    let beskeder = [];
    beskedArray.map(besked => {
        if (besked.rum === request.params.rum) {
            beskeder.push(besked.tekst);
        }
    });
    response.send(beskeder);
})

app.get('/rum', (request, response) => {
    let beskeder = [];
    beskedArray.map(besked => {
        beskeder.push(besked.rum);
    });
    response.send(beskeder);
})

app.post('/besked', (request, response) => {
    let { navn, rum, tekst } = request.query;
    beskedArray.push({ navn, rum, tekst });
    response.send("Ok")
})

app.listen(8080, () => {
    console.log("Lytter på port 8080 ...")
})
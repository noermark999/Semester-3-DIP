//Dette er kode lavet sammen i klassen
const express = require('express');
const app = express();

app.get("/temperature/:where", (request, response)=>{
    response.send(`{"temperature":21, "location":"${request.params.where}"}`);
})

app.get("/humidity", (request, response)=>{
    response.send('{"humidity":57}')
})

app.get("/", (request, response)=>{
    response.send('Velkommen til hjemmesiden')
})

app.use((request, response)=>{
    response.status(404).send("Kunne ikke finde siden");
})

app.listen(8080, ()=>console.log("Serveren kører på port 8080"));

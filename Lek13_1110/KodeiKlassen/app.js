const express = require('express');
const figlet  = require('figlet');
const morgan = require('morgan');
const app = express();

app.use(morgan('tiny'))

app.use((request, response, next)=>{
    console.log("Der er sket et request");
    next();
})

app.get('/:name', (request, response)=>{
    figlet.text(request.params.name, (error, data)=>{
        if (error) throw error
        response.write(data);
        response.end();
    })
})

app.post('/', (request, response)=>{
    response.send("Answer, ok");
})

app.listen(8080, ()=>{
    console.log("Serveren kører");
})
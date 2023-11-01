let express = require('express');
let app = express();
let path = require('path')

//View engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'))

//Middle ware
app.use(express.static(__dirname + '/assets'))

//Routes
app.get('/', (req, res) => {
    let cats = [
        { name: "misser", image: 'kat1.jpg' },
        { name: "buster", image: 'kat2.jpg' },
        { name: "futte", image: 'kat3.jpg' }
    ]
    res.render('main', { name: 'Jakob', cats: cats })
})

app.get('/:name', (req, res) =>{
    res.render('simpel', {name: req.params.name})
})

app.get('/katte', (req, res) => {
    res.send("så kom vi så langt")
})

//Start server
app.listen(8080, () => {
    console.log("Express lytter nu til dine requests på port 8080")
})
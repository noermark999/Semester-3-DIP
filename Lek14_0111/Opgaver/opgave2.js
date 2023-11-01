const url = "https://randomuser.me/api/?nat=dk&results=100";
let express = require('express');
let app = express();
let path = require('path')

async function main(url) {
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    const data = await respons.json();
    return data.results;
}


//View engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'))

//Middle ware
app.use(express.static(__dirname + '/assets'))

app.get('/', async (req, res) => {
    let jsonData = await main(url);
    res.render('opgave2', {people: jsonData})
})

app.listen(8080, () => {
    console.log("Lytter nu på port 8080")
})
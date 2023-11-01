const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';
let express = require('express');
let app = express();
let path = require('path')

async function main(url) {
    const respons = await fetch(earthquakeUrl);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    const data = await respons.json();
    return data.features;
}

//View engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views'))

//Middle ware
app.use(express.static(__dirname + '/assets'))

app.get('/', async (req, res) => {
    let jsonData = await main(earthquakeUrl);
    let eqs = []
    jsonData.map(eq => {
        if (eq.properties.mag > 5) {
            eqs.push({place: eq.properties.place, mag: eq.properties.mag, time: new Date(eq.properties.time).toLocaleString()})
        }
    });
    eqs.sort((eq1, eq2) => eq2.mag-eq1.mag)
    res.render('opgave1', { eqs: eqs })
})

app.listen(8080, () => {
    console.log("Lytter nu på port 8080")
})

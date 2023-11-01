// opgave12.1.js
const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';

async function main(url) {
    const respons = await fetch(earthquakeUrl);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    const data = await respons.json();
    const eqs = data.features;
    document.body.innerHTML = generateAndSortTable(eqs);
}

function generateAndSortTable(eqs){
    let html = '<table><thead><tr><th>Location</th><th>Magnitude</th><th>Time</th></tr></thead>';
    eqs.sort((eq1, eq2) => eq2.properties.mag-eq1.properties.mag);
    for (let eq of eqs) {
        if (eq.properties.mag >= 5) {
            let dato = new Date(eq.properties.time).toLocaleString();
            html += '<tr><td>' + eq.properties.place +
                '</td><td>' + eq.properties.mag +
                '</td><td>' + dato +
                '</td></tr>\n';
        }
    }
    return html += '</table>';
}

main(earthquakeUrl);
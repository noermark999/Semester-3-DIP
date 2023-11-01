const express = require('express');
const app = express();
const fs = require('fs').promises;

function genererLinks(filnavne) {
    let html = '';
    for (let filnavn of filnavne) {
        html += '<a href="' + filnavn + '">' + filnavn + '</a><br>\n';
    }
    return html;
}

app.use(express.static(__dirname + '/filer'))

app.get('/', async (request, response) => {
    let filnavne = await fs.readdir(__dirname + '/filer');
    let html = genererLinks(filnavne);
    response.send(html);
    response.end()
})

app.listen(8080, () => {
    console.log('Lytter på port 8080 ...');
});    
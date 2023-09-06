const streetNames = ["Nørregade", "Østergade", "Søndergade"];

const olNode = document.createElement('ol');

for (let streetName of streetNames) {
    let streetNode = document.createElement('li');
    streetNode.textContent = streetName;
    olNode.appendChild(streetNode)
}

document.body.appendChild(olNode);

const todoNode = document.getElementById('todo');

let task = document.createElement('li');
task.innerHTML = "<b>Købe ind</b>"
todoNode.appendChild(task);
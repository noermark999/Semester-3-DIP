const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

let h1Node = document.createElement('h1');
h1Node.style.color = "red";
h1Node.textContent = "Mountains";
document.body.insertBefore(h1Node, document.querySelector('table'));

let table1 = document.querySelector('table');
for (let mountain of MOUNTAINS) {
    let tdName = document.createElement('td');
    tdName.textContent = mountain.name;
    tdName.style.border = "0.3em solid blue";
    let tdHeight = document.createElement('td');
    tdHeight.textContent = mountain.height;
    tdHeight.style.border = "0.3em solid blue";
    let tdPlace = document.createElement('td');
    tdPlace.textContent = mountain.place;
    tdPlace.style.border = "0.3em solid blue";
    let tr = document.createElement('tr');
    tr.appendChild(tdName);
    tr.appendChild(tdHeight);
    tr.appendChild(tdPlace);
    table1.appendChild(tr);
}
table1.style.borderCollapse = "collapse";
document.querySelector('tr').style.border = "0.3em solid blue";
for (let e of document.querySelectorAll('input')) {
    e.outerHTML = "<label>" + e.id + ": " + e.outerHTML + "</label>";
}

let tal = document.getElementById('tal');
let labels = document.querySelectorAll('label');
function randomTal(event) {
    event.target.value = Math.floor(Math.random() * 100);
}
tal.onclick = randomTal;
labels[0].onclick = randomTal;


let tid = document.getElementById('tid');
function randomTid(event) {
    event.target.value = new Date().toLocaleTimeString();
}

tid.onclick = randomTid;
labels[1].onclick = randomTid;
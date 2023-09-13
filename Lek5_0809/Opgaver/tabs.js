const spans = document.querySelectorAll('span');
let h1Nodes = document.querySelectorAll('h1');
let i = 0;

h1Nodes[1].style.display = "none";
h1Nodes[2].style.display = "none";

function fjernEllerVis() {
    let node = h1Nodes[i];
    if (h1Nodes[i].style.display != "none") {
        h1Nodes[i].style.display = "block";
    } else {
        h1Nodes[i].style.display = "none";
    }
    
}


for (let e of spans) {
    e.onclick = fjernEllerVis;
    i++;
}
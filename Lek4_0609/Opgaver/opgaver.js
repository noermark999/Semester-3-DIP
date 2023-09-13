// Tilføj kode for opgave 4.1 - 4.5 her!

let pRedNode = document.querySelectorAll('p');
for (let element of pRedNode) {
    element.className = "red";
}

let overskriftNode = document.querySelectorAll('h1');
for (let element of overskriftNode) {
    element.nextElementSibling.nextElementSibling.style.color = 'brown';
}

let listeNode = document.querySelectorAll('li');
for (let i = 0; i < listeNode.length; i += 2) {
    listeNode[i].style.backgroundColor = "lightGrey";
}

for (let element of overskriftNode) {
    let prev = element.nextElementSibling;
    let prevTekst = prev.textContent;
    let parent = prev.parentNode;
    let newNode = document.createElement('h2');
    newNode.textContent = prevTekst;
    parent.replaceChild(newNode, prev);
}
/*      Anden løsning til ovenstående
    for (let e of document.querySelectorAll('h1 + p')) {
        let h2Node = document.createElement('h2');
        e.parentNode.replaceChild(h2Node, e);
    }
*/




let overskriftId = 0;

for (let element of overskriftNode) {
    overskriftId++;
    element.id = overskriftId;
}

const refListe = document.createElement('ul');

for (let element of overskriftNode) {
    let li = document.createElement('li');
    let anchorNode = document.createElement('a');
    anchorNode.href = "#" + element.id;
    anchorNode.textContent = element.textContent;
    li.appendChild(anchorNode);
    refListe.appendChild(li);
}
document.body.insertBefore(refListe, document.querySelector('h1'))

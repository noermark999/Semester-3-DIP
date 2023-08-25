let tekst = "Her er der en længere tekst til at teste at";
let antalord = {};
let ord = tekst.split(' ');
for (let i of ord) {
    if (i in antalord) {
        antalord[i] = antalord[i] + 1;
    } else {
        antalord[i] = 1;
    }
}
console.log(antalord)
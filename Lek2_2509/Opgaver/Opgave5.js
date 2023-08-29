let a = {navn: "A", email: "a@gmail.com", mobil: "91398328"};
let b = {navn: "B", email: "B@gmail.com", mobil: "91398328"};
let c = {navn: "C", email: "C@gmail.com", mobil: "91398328"};
let d = {navn: "D", email: "D@gmail.com", mobil: "91398328"};


let personArray = [a, b, c, d];

personArray[0].navn = "Albert";
console.log(personArray);

delete personArray[3];

console.log(personArray);

let e = {navn: "E", email: "E@gmail.com", mobil: "91398328"};

personArray[3] = e;

console.log(personArray);

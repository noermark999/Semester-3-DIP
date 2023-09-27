users = [
    {
        name: "Yazeed",
        age: 25,
        mobil: "23843921"
    },
    {
        name: "Sam",
        age: 30,
        mobil: "85392744"
    },
    {
        name: "Bill",
        age: 20,
        mobil: "91365264"
    }
];

//Find person med et bestemt mobilnummer.
console.log("bestemt mobilnr: " + (users.find(e => e.mobil === "91365264")).name);

//Find den mindste alder.
let youngest = users.reduce((accu, user) => accu.age < user.age ? accu : user , users[0])
console.log(youngest)

//Modificer arrayet med personer, så personerne nu får et fortløbende id.
let id = 0;
users.forEach(element => {
    element.id = id;
    id++;
});
console.log(users);

//Generer en tekststreng, der indeholder personernes navne – kommasepareret og i sorteret rækkefølge.
let navneString = "";
users.map((e) => e.name).sort().forEach((e) => navneString += e + ", ")
console.log(navneString);

//Generer et array med navn og mobilnummer på de personer, der er yngre end 30.
let under30Array = users.filter((u1) => u1.age <= 30);
console.log(under30Array.map((e) => e.name + ": " + e.mobil));

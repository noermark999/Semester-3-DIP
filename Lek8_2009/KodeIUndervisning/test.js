users = [
    {
        name: "Yazeed",
        age: 25
    },
    {
        name: "Sam",
        age: 30
    },
    {
        name: "Bill",
        age: 20
    }
]
// ----------------------------------------------------------------------------------------------------------


getName = (user) => user.name;
usernames = [];

for (let i = 0; i < users.length; i++) {
    const name = getName(users[i]);
    usernames.push(name);
}

console.log(usernames);

// Brug af Hof
usernames = users.map(getName);

console.log(usernames);

// ----------------------------------------------------------------------------------------------------------

// total age uden hof
total = 0;

for (let i = 0; i < users.length; i++) {
    total += users[i].age;
}

console.log(total / users.length);

//med hof
totalAge = users.reduce((total, user) => user.age + total, 0);

console.log(totalAge / users.length);

// ----------------------------------------------------------------------------------------------------------

//Find navne der starter med b Uden hof
startsWithB = (string) => string.toLowerCase().startsWith('b');
namesStartingWithB = [];

for (let i = 0; i < users.length; i++) {
    if (startsWithB(users[i].name)) {
        namesStartingWithB.push(users[i]);
    }
}
console.log(namesStartingWithB);
// [{ "name": "Bill", "age": 20 }]

// Med HOF
//namesStartingWithB = users.filter((user) => startsWithB(user.name));
newNamesWithB = users.filter((user) => user.name.toLowerCase().startsWith('b'));
console.log(newNamesWithB);
// [{ "name": "Bill", "age": 20 }]

let numbers = [5, 321, 10, 3, 33, 96, 32, 1, 9, 43];

let smallnumbers = numbers.filter((n) => n <= 10);
console.log(smallnumbers)

let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers);

let sortedNumber = numbers.sort((a, b) => a-b);
console.log(sortedNumber);

let sortedNumberFiltered = numbers.sort((a, b) => a-b).filter((n) => n % 2 !== 0);
console.log(sortedNumberFiltered);

//accumulater er en variabel der måske bliver ændret efter hvert element
//det der står efter komma er bare hvad accumulater skal starte på
//Tror det for det meste godt kan være det første objekt i et array af objekter
//Det før komma skal altid returnere en af de to argumenter i funktionen, i dette tilfælde er det accumulater og user

let youngestUser = users.reduce((accumulater, user) => accumulater.age < user.age ? accumulater : user , users[0]);

console.log(youngestUser);

//Sorter users efter alder

users = users.sort((u1, u2) => u1.age - u2.age);
console.log(users)
// specialisering.js
class Person {
    constructor(navn) {
        this.navn = navn;
    }
    toString() { return this.navn; }
    equals(p) {
        if (p.navn === this.navn && p.constructor === Person) {
            return true;
        }
        return false;
    }
    static compare(p1, p2) {
        if (p1 < p2)
            return -1;
        else if (p1 > p2)
            return 1;
        else return 0;
    }
}
class Studerende extends Person {
    constructor(navn, id) {
        super(navn);
        this.id = id;
    }
    toString() { return super.toString() + ": " + this.id; };
    equals(s) {
        if (s.navn === this.navn && s.id === this.id && s.constructor === Studerende) {
            return true;
        }
        return false;
    }
}

class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };
}

let personer = [];
let peter = new Person("Peter");
let lars = new Person("Lars");
let ida = new Studerende("Ida", 1);
let alex = new Studerende("Alex", 2);
let kat = new Kat("Kat");
personer.push(kat)
personer.push(peter, lars, ida, alex);

console.log(personer);
personer.sort(Person.compare);
console.log(personer);

let test = {
    navn: "Lars"
}
console.log(lars.equals(test));
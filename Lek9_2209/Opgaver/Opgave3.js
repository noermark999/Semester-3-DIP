class Person {
    constructor(navn) {
        this.navn = navn;
    }
    #gruppe
    toString() { return this.navn; }
    setGruppe(gruppe) {
        this.#gruppe = gruppe;
        gruppe.addPerson(this);
    }
    getGruppe() {
        return this.#gruppe;
    }
}

class Gruppe {
    constructor(nummer) {
        this.nummer = nummer;
    }
    #personer = [];
    toString() { return "Gruppe: " + this.nummer; }
    addPerson(person) {
        if (!this.#personer.includes(person)) {
            this.#personer.push(person)
            person.setGruppe(this);
        }
    }
    getPersoner() {
        return this.#personer;
    }
}

let peter = new Person("Peter");
let lars = new Person("Lars");
let ida = new Person("Ida");

let gruppe1 = new Gruppe(1);

gruppe1.addPerson(peter);
gruppe1.addPerson(lars);
gruppe1.addPerson(ida);

console.log(gruppe1 + "\n\t" + gruppe1.getPersoner())

console.log(peter + ": " + peter.getGruppe());

class StringStack {
    constructor() {
    }
    #stack = []
    push(s) {
        return this.#stack.push(s);
    }
    pop(s) {
        return this.#stack.pop();
    }
    get() {
        return this.#stack;
    }
}

let test = new StringStack;
test.push("Hej");
console.log(test);
console.log(test.get());

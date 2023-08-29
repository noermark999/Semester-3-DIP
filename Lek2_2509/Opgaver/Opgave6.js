function balanceret(str) {
    let strAr = str.split('');
    let stak = [];
    for (let i of strAr) {
        if (i === "(" || i === "{" || i === "[") {
            stak.push(i);
            console.log(stak);
        } else if (i === ")") {
            if (stak.pop() !== "(") {
                console.log("Ikke balanceret");
                return;
            }
        } else if (i === "}") {
            if (stak.pop() !== "{") {
                console.log("Ikke balanceret");
                return;
            }
        } else if (i === "]") {
            if (stak.pop() !== "[") {
                console.log("Ikke balanceret");
                return;
            }
        }
    }
    if (stak.pop() !== undefined) {
        console.log("Ikke balanceret");
        return;
    }
    console.log("Den er balanceret");
}

let str = "({[]})()"

balanceret(str);
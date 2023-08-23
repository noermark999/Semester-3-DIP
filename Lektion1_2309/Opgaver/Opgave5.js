function primtal(x) {
    let primtal = 1;
    while (primtal < x) {
        if (primtal % 2 == 0 && primtal > 2) {
            primtal++;
        } else {
            for (let i = 1 ; i<primtal ; i++) {
               if (primtal % i === 0 ) {
                console.log(primtal);
               } 
            }
            primtal++;
        }
    }
}
let y = 15;
primtal(y);
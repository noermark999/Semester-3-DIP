class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

class Square extends Polygon {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
    get area() {
        return this.height * this.height
    }
    /**
     * @param {any} newLength
     */
    set sideLength(newLength) {
        this.height = newLength;
        this.width = newLength;
    }
}

let square = new Square(2);
square.sideLength = 4
console.log(square.area);
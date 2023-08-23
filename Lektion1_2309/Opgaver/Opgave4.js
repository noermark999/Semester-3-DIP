let liste1 = [0,2,4,5,8,10,15,18,21];
let liste2 = [1,3,4,7,10,13,14,19,24];

function flet(list, list1) {
    let i1 = 0;
    let j1 = 0;
    let length = (list.length-1) + (list1.length-1);
    let result = [];
    while (i1 < list.length && j1 < list1.length) {
        if (list[i1] < list1[j1]) {
            result.push(list[i1]);
            i1++;
        } else if (list1[j1] < list[i1]) {
            result.push(list1[j1]);
            j1++;
        } else {
            result.push(list[i1]);
            result.push(list1[j1]);
            i1++;
            j1++;
        }
    }
    if (i1 < list.length) {
        while (i1 < list.length) {
            result.push(list[i1]);
            i1++;
        }
    } else {
        while (j1 < list1.length) {
            result.push(list1[j1])
            j1++;
        }
    }
    return result;
}
let result1 = flet(liste1,liste2);
console.log(result1.toString());
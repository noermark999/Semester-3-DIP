function compareSort(comp) {
    return function(array) {
        array.sort(comp)
    }
}

function compare(s1, s2) {
    if (s1 < s2)
        return -1;
    else if (s1 > s2)
        return 1;
    else return 0;
}

function compareLen(s1, s2) {
    if (s1.length < s2.length) {
        return -1;
    } else if (s1.length > s2.length) {
        return 1;
    } else {
        return 0;
    }
}

let navneArray = ["Jakob", "Peter", "Lars", "Mogens", "Karsten", "Pia", "Andrea"];

compareSort(compareLen)(navneArray);

console.log(navneArray);
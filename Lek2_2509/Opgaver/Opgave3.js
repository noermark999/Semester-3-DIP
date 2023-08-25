function compare(s1, s2) {
    if (s1 < s2) {
        return -1;
    } else if (s1 > s2) {
        return 1;
    } else {
        return 0;
    }
}

console.log(compare("peter", "Abekat"))

function compareLen(s1, s2) {
    if (s1.length < s2.length) {
        return -1;
    } else if (s1.length > s2.length) {
        return 1;
    } else {
        return 0;
    }
}

console.log(compareLen("Peter", "Jakob"));

function compareIgnoreCase(s1, s2) {
    let news1 = s1.toLowerCase();
    let news2 = s2.toLowerCase();
    if (news1 < news2) {
        return -1;
    } else if (news1 > news2) {
        return 1;
    } else {
        return 0;
    }
}

console.log(compareIgnoreCase("Peter", "Jakob"));

function bubbleSort(list, com) {
    for (let i = list.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            const a = com(list[j], list[j + 1]);
            if (a === 1) {
                let temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
            }
        }
    }
}

let listtest = [7, 13, 9, 8, 4, 1, 2, 16, 0];
bubbleSort(listtest, compare);
console.log(listtest.toString());

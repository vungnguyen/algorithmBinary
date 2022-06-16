"use strict";
function findItemMiss(data) {
    let i = 1;
    let arr = [];
    while (i <= 10) {
        if (data.indexOf(i) == -1) {
            arr.push(i);
        }
        i++;
    }
    return arr;
}
console.log(findItemMiss([1, 2, 3, 6, 9, 8]));

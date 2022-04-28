"use strict";
function getName() {
    return "andi ahamd saputra";
}
//return string
function stringReversed(s) {
    let temp = "";
    for (var i = 0; i < s.length; i++) {
        let arr = s[i];
        temp = arr + temp;
    }
    return temp;
}
//return number
function getNumber(s) {
    return s;
}
//tanpa return
function getNameWithoutReturn() {
    console.log("getNameWithoutReturn");
}
console.log(getName());
console.log(stringReversed("abc"));
console.log(getNumber(1));
getNameWithoutReturn();

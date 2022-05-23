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
//multiple argument
function Multi(a, b) {
    return a + b;
}
const add = (val1, val2) => {
    return val1 + val2;
};
//optional parameters
//hanya bisa di eksekusi ketika returnnya string
const getUmur = (val1, val2) => {
    return val1 + "" + val2;
};
function Main() {
    console.log("from add =", add(1, 3));
    console.log("getName =", getName());
    console.log("hasil string reverse = ", stringReversed("abc"));
    console.log("getNumber", getNumber(1));
    console.log(Multi(1, 2));
    getNameWithoutReturn();
    const result = Multi(1, 2);
    const res = stringReversed("andi");
    console.log(getUmur(1));
    console.log(res);
    console.log(result);
}
console.log(Main());

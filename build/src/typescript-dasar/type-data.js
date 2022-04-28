"use strict";
//string
let nama = "andiahmad";
nama = "knto aji";
//integer
let umur = 12;
umur = 12;
//any
let hero = "gg";
hero = 12;
hero = false;
//array
let array;
array = [1, 2, 3];
let array2;
array2 = ["jeruk", "buah"];
//tuple
let biodata;
biodata = ["surabaya", 123];
// biodata = ["surabaya",true] //error
//enum 
//tipe data yg menyimpan data constannya di level applikasi
// enum Month {
//     JAN, FEB,MAR,APR,MEI,JUNE,JUL
// }
// console.log(Month.JAN)
var Month;
(function (Month) {
    Month["JAN"] = "JANUARI";
    Month["FEB"] = "FEBUARI";
    Month["MAR"] = "MARET";
    Month["APR"] = "APRIL";
    Month["MEI"] = "MEI";
    Month["JUNE"] = "JUNE";
    Month["JUL"] = "JUL";
})(Month || (Month = {}));
console.log(Month.JAN);
// type data union
let phone;
phone = 89898989;
phone = "helllo";

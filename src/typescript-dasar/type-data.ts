//string
let nama: string = "andiahmad";
nama = "knto aji"


//integer
let umur: number =12
umur = 12


//any
let hero: any ="gg"
hero = 12
hero=false


//array
let array: number[];
array = [1,2,3]


let array2: string[];
array2 = ["jeruk","buah"]



//tuple
let biodata: [string,number]
biodata = ["surabaya",123]
// biodata = ["surabaya",true] //error


//enum 
//tipe data yg menyimpan data constannya di level applikasi
// enum Month {
//     JAN, FEB,MAR,APR,MEI,JUNE,JUL
// }
// console.log(Month.JAN)


enum Month {
    JAN="JANUARI", FEB="FEBUARI",MAR="MARET",APR="APRIL",MEI="MEI",JUNE="JUNE",JUL="JUL"
}
console.log(Month.JAN)


// type data union
let phone: number | string
phone =89898989
phone = "helllo"
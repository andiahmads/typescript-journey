// generic adalah tipe data dinamis

const getData = (value:any) =>{
    return value
}


//ini akan terjadi masalah ketika menggunakan any
console.log(getData("andi").length)
console.log(getData(123).length)


//solusi dengan menggunakan generic
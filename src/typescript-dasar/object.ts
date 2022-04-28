// variable user ini bersifat immutable
type User = {
    name: string;
    age: number;
}

type Nilai = {
    score: number;
}

let score:Nilai
let list: User 

const listMahasiswa = [
    list={name:"andi",age:21},
    list={name:"ganteng",age:61},
    list={name:"mee",age:51},
    list={name:"tedu",age:31}
]

const listScore = [
    score={score:30.4},
    score={score:50.7},
    score={score:80.90},
    score={score:83.90},
    score={score:84.90}
]
    
//lakukan perulangan dengan map   
let datfarUser = listMahasiswa.map(u =>{
    return u.name
})

let datfarScore = listScore.map(s=>{
    return s.score.toFixed() 
})


let filterUsia = listMahasiswa.filter(mhs =>{
    return mhs.age > 30
})


function Main2():void {
    console.log(datfarUser)
    console.log(datfarScore)
    console.log(filterUsia)

}

Main2()




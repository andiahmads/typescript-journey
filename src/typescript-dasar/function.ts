function getName() :string { 
    return "andi ahamd saputra"
}


//return string
function stringReversed(s :any) :string {
    let temp :string =""
    for (var i = 0; i < s.length; i++) {
        let arr:any = s[i]
        
        temp = arr+temp
    }

    return temp
}


//return number
function getNumber(s :number) :number {
    return s
}


//tanpa return
function getNameWithoutReturn() : void {
    console.log("getNameWithoutReturn")
}


//multiple argument
function Multi(a:number ,b : number) : number {
    return a+b
}


// function dengan type data
type Tambah = (val1:number,val2:number) => number;

const add : Tambah = (val1:number,val2:number) : number =>{
    return val1+val2
}


function Main() : void {
    console.log("from add =",add(1,3))
    console.log("getName =",getName())
    console.log("hasil string reverse = ",stringReversed("abc"))
    console.log("getNumber",getNumber(1))
    console.log(Multi(1,2))
    getNameWithoutReturn()
    
    const result = Multi(1,2)
    const res = stringReversed("andi")
    
    console.log(res)
    console.log(result)
}

console.log(Main())
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

console.log(getName())
console.log(stringReversed("abc"))
console.log(getNumber(1))
getNameWithoutReturn()


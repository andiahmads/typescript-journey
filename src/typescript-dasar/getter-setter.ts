export class User {
    // public name: string;
    //buat consturctor
    constructor(public name: string,public age:number) {
        this.name = name;
        this.age = age;
    }

    setName = (name:string) :void => {
        this.name = name;
    }

    getName = (): string => {
        return this.name;
    }

}


//public = bisa diakses di semua class/dari luar
// protected = bisa diakses dari class tersebut, dan class turunan
//private = hanya bisa diakses dari class itu sendiri

class Admin extends User {
    read : boolean=true
    write : boolean=true
    phone : string
    private _email : string = ""
    
    constructor(phone:string, name:string,age:number) {
        super(name,age)
        this.phone = phone
    }

    getRole():{read: boolean,write: boolean} {
        return{
            read:this.read,
            write:this.write
        }
    }


    set email(value:string) {
        if(value.length < 5) {
            this._email = "email salah"
        } else {
            this._email = value
        }
    }

    get email(): string {
        return this._email
    }
}



function Main3() :void {
    let user = new User("andiahmad",12);
    console.log(user);
    let admin = new Admin("299999","andi",22)
    admin.getName()
    admin.setName("kukang")
    admin.getRole()
    console.log(admin)
    admin.email="and"
    console.log(admin.email)

}

Main3()
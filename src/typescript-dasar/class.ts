export class User {
    // public name: string;


    //buat consturctor
    constructor(public name: string) {
        this.name = name;
    }


}


let user = new User("andiahmad");
console.log(user);
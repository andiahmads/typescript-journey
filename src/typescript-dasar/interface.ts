interface Laptop {
    name:string;
    on(): void;
    off(): void;
}


class Asus implements Laptop{
    constructor(name:string) {
        this.name = name
    }
    name: string;
    on(): void {
        console.log("laptop hidup")
    }
    off(): void {
        console.log("laptop mati")

    }
}


let asus = new Asus("rog")
console.log(asus)
asus.on()
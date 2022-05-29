abstract class Vehicle {

    abstract wheels : number;
    start(): void {
        console.log("brummmm!!")
    }
}


class Mobil extends Vehicle{
    wheels: number = 4
}

class Motor extends Vehicle{
    wheels: number = 2;
}


function main5(): void {
    let car = new Mobil()
    console.log(car.wheels);
    car.start();

    let motor = new Motor()
    console.log(motor.wheels);
    motor.start()

}


main5()
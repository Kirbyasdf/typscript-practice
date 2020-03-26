class Vechile {
  constructor(public color: string) {}
  //^ all is having to put this.color = color in constructor
  drive(): void {
    console.log("chugga chugga");
  }
  protected honk(): void {
    console.log("honk honk ");
  }
}

const vechile = new Vechile("orange");
vechile.drive();
console.log(vechile.color);
//
// can not call due to being protected which is same as private but child class can call in itself see startDriving()
// vechile.honk();

class Car extends Vechile {
  constructor(public gears: number, color: string) {
    super(color);
  }
  // ^ super takes the parent class and applies it
  drive(): void {
    console.log("vroom");
  }
  private start(): void {
    console.log("revvvv");
  }

  startDriving(): void {
    this.start();
    this.honk();
  }
}

const newCar = new Car(3, "blue");

newCar.drive();

newCar.startDriving();
// cant call because its private
// newCar.start();

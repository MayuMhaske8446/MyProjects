// Example 1
class Car{
  constructor(brand){
    this.carName = brand;
  }
  present(){
    return `I have a ${this.carName}`;
  }
  static hello(){
    return "Hello!";
  }
}

myCar = new Car("Tata");
console.log(myCar.carName);

console.log(myCar.present('safari'));

class Model extends Car {
  constructor(brand, mod){
    super(brand);
    this.model = mod;
  }
  show(){
    return this.present() + `, it is a ${this.model}`
  }
}

myCar = new Model("Tata", "Safari");
console.log(myCar.show());

console.log(Car.hello());

// Example 2

class Rectangle{
  constructo(height, width){
    this.name = `Rectangle`;
    this.height = height;
    this.width = width;
  }
  sayName(){
    console.log(`Hi, I am ${this.name}`);
  }
  get aera(){
    return this.height * this.width;
  }
  set area(value){
    this._area = value;
  }
}

class Square extends Rectangle{
  constructor (length){
    super(length, length);
    this.name = `Square`;
  }
}

// Example 3 (broad with super keyWord)

class Rectangle1 {
  static logNbSides(){
    return `I have 4 sides`;
  }
}

class Square1 extends Rectangle1{
  static logDescription(){
    return `${super.logNbSides()} which are all equal`;
  }
}

document.getElementById("demo").innerHTML = Square1.logDescription();

// Example 4

class Base{
  static baseStaticField = 90;
  basemethod(){
    return 10;
  }
}

class Extended extends Base{
  extendedField = super.basemethod();
  static extendedStaticField = super.baseStaticField;
}

console.log(Extended.extendedField);
console.log(Extended.extendedStaticField);

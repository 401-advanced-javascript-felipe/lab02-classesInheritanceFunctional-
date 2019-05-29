'use strict';

class Vehicle {
  constructor(name, wheels){
    this.name = name;
    this.wheels = wheels;
  }

  drive() {
    return 'driving';
  }

  stop() {
    return 'stopping';
  }
}


class Car extends Vehicle {
  constructor(name){
    super(name, 4);
  }

}


class Motorcycle extends Vehicle {
  constructor(name){
    super(name, 2);
  }

  wheelie(){
    return 'wheelie';
  }
}

module.exports = {Car, Motorcycle};

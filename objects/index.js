'use strict';

const VehicleConstructor = require('./vehicle-constructor.js');

const VehicleClass = require('./vehicle-class');

const VehicleFactory = require('./vehicle-factory');

// Implement a car and motorcycle using a Constructor
const mazda = new VehicleConstructor.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new VehicleConstructor.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());

// Implement a car and motorcycle using a Class
const honda = new VehicleClass.Car('Honda Civic');
console.log(honda.name, honda.drive());

const vespa = new VehicleClass.Motorcycle('Vespa');
console.log(vespa.name, vespa.wheelie(), vespa.stop());

// Implement a car and motorcycle using a Factory
const toyota = new VehicleFactory.Car('Toyota');
console.log(toyota.name);

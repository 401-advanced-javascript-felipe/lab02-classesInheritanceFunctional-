
'use strict';

const vehicle = () => ({
  drive: () => {
    return 'driving';
  },
  stop: () => {
    return 'stopping';
  }
});

function Car(name){
  let car = Object.assign(
    {wheels: 4},
    {name},
    vehicle()
  );

  return Object.freeze(car);
}

function Motorcycle(name){
  let motorcycle = Object.assign(
    {wheels: 2},
    {name},
    {wheelie},
    vehicle()
  );

  function wheelie() {return 'wheelie';}

  return Object.freeze(motorcycle);
}




module.exports = {Car, Motorcycle};

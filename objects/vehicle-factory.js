
'use strict';

const Vehicle = () => ({
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
    Vehicle()
  );

  return Object.freeze(car);
}


function Motorcycle(name){
  let motorcycle = Object.assign(
    {wheels: 2},
    {name},
    {wheelie},
    Vehicle()
  );

  function wheelie() {return 'wheelie';}

  return Object.freeze(motorcycle);
}




module.exports = {Car, Motorcycle};

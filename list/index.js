'use strict';

const List = require('./list-constructor.js');

let stuff = new List();
stuff.push('a');

stuff.push('b');

stuff.pop();
stuff.push('b');
stuff.unshift('b','c');

stuff.forEach(element => {
  console.log(element);
});

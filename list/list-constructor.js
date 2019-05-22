'use strict';

function List() {
  this.length = 0;
  this.data = {};
}
/**
 * Add item to the end of the list
 * @param item
 */
List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};

/**
 * // Remove an item from the end of the list and return it's value
 * @returns {*}
 */
List.prototype.pop = function() {
  let returnValue = this.data[this.length - 1];
  delete this.data[this.length-1];
  this.length--;
  return returnValue;
};

List.prototype.shift = function() {
  let returnValue = this.data[0];
  delete this.data[0];
  this.length--;
  return returnValue;
};

List.prototype.unshift = function(...args) {
  let valuesHolder = Object.values(this.data);

  for (let i = 0; i < args.length; i++){
    this.data[i] = args[i];
  }
  this.length = args.length;

  for (let i = 0; i < Object.values(valuesHolder).length; i++){
    this.push(valuesHolder[i]);
  }

  return this.length;
};

List.prototype.forEach = function(fn) {
  for(let i = 0; i < this.length; i++){
    fn(this.data[i], i);
  }
};

module.exports = List;

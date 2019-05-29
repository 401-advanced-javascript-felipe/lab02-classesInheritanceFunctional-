'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * Add item to the end of the list
   * @param item
   */
  push(item) {
    // Add an item to the end
    this.data[this.length] = item;
    this.length++;
  }

  /**
   * // Remove an item from the end of the list and return it's value
   * @returns {*}
   */
  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }

  shift() {
    let returnValue = Object.values(this.data[0]);
    returnValue = returnValue[0];
    for(let i = 0; i < this.length; i++){
      this.data[i] = this.data[i+1];
    }
    this.pop();
    return returnValue;
  }

  unshift(...args) {
    let valuesHolder = Object.values(this.data);
    for (let i = 0; i < args.length; i++){
      this.data[i] = args[i];
    }
    this.length = args.length;

    for (let i = 0; i < Object.values(valuesHolder).length; i++){
      this.push(valuesHolder[i]);
    }
    return this.length;
  }

  forEach(fn) {
    for(let i = 0; i < this.length; i++){
      fn(this.data[i], i);
    }
  }

}

module.exports = List;

'use strict';

// These 2 should be interchangeable!
const List = require('../list.js');
// const List = require('../list-constructor.js');

describe('List Data Structure', () => {

  it('starts with a length of -1 and an empty data set', () => {
    let stuff = new List();
    expect(stuff.length).toEqual(0);
    expect(stuff.data).toEqual({});
  });

  it('pushes items to the end of the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    expect(stuff.length).toEqual(2);
    expect(stuff.data[1]).toEqual('b');
  });

  it('pops last item in the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.pop();
    expect(stuff.length).toEqual(1);
    expect(stuff.data[0]).toEqual('a');
  });

  it('shifts(deletes) first item in the data set', () => {
    let stuff = new List();
    stuff.push('a');
    stuff.push('b');
    stuff.shift();
    expect(stuff.length).toEqual(1);
    expect(stuff.data[0]).toEqual('b');
  });

  it('adds items to the beginning of data set', () => {
    let stuff = new List();
    stuff.push('d');
    stuff.push('c');
    stuff.unshift('a','b');
    expect(stuff.length).toEqual(4);
    expect(stuff.data[3]).toEqual('c');
  });

  it('iterates over the data set and do something with each item in the dataset. In this case duplicate dataset', () => {
    let stuff = new List();
    stuff.push(3);
    stuff.push(5);
    stuff.push(10);
    stuff.push(6);
    let newStuff = new List();

    stuff.forEach((el) => {
      newStuff.push(el);
    });

    expect(stuff).toEqual(newStuff);
  });



});

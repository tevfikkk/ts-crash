"use strict";
//Basic Types
let id = 5;
let company = 'Halo';
let isPublished = true;
let x = 'HELLO';
let age;
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
ids = ids.concat(6);
//console.log(arr)
// Tuple
let person = [5, 'John', true];
// Tuple array
let employee;
employee = [
    [1, 'John'],
    [5, 'Let'],
    [7, 'Fil Necati'],
];
//console.log(employee)
// Union
let pid = 22;
pid = '55';
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 7] = "Up";
    Direction1[Direction1["Down"] = 8] = "Down";
    Direction1[Direction1["Left"] = 9] = "Left";
    Direction1[Direction1["Right"] = 10] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John',
};
// Type Assertion
let cid = 1;
//let customerId = <number>cid
let customerId = cid;
// Functions
const addNum = (x, y) => {
    return x + y;
};
const log = (message) => {
    console.log(message);
};
const user1 = {
    id: 1,
    name: 'John',
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad');
const masterchief = new Person(2, 'Master Chief');
// Subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Cortana', 'AI');
//console.log(emp.register())
// Generics
const getArray = (items) => {
    return new Array().concat(items);
};
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'john', 'jill']);
strArray.push('hello');
numArray.push(5);
console.log(strArray);
console.log(numArray);

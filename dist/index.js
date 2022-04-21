"use strict";
// Basic Types
let id = 5;
let company = "Hello World";
let isPublished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "hello"];
// Tuple
let person = [1, "Charles", true];
// Tuple Array
let employee = [
    [1, "Charles"],
    [2, "Gemuel"]
];
// Union
let pid;
pid = "hi";
pid = 19;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right"; // 3
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 2,
    name: "Charles"
};
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
customerId = 23;
// Functions
function addNum(x, y) {
    return x + y;
}
// console.log(addNum(1, 2))
function log(message) {
    console.log(message);
}
log("Keep it up!");
const user1 = {
    id: 1,
    name: "Charles"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const charles = new Person(1, "Charles ");
const john = new Person(2, "John");
console.log(charles, john);
class Person2 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return "1";
    }
}
const joe = new Person2(2, "Joe");
console.log(joe.register());
// Extending Classes (Subclasses)
class Employee extends Person2 {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Jana", "Developer");
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["a", "b", "c"]);
strArray.push("hello");

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

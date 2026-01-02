// Fundamentals of javascript
// arrays and objects
// functions return
// async js coding

let arr = [1, 2, 3, 3, 4];
// foreach, map, filter, find, indexOf

// FIRST:-
// arr.forEach(function (item) {
//   console.log(item);
//   if (item == 2) {
//     console.log("hello");
//   }
// });

// SECOND:-
// let res = arr.map(function (val) {
//   return val + 12;
// });
// console.log(res);

// THIRD:-
// let res = arr.filter(function (val) {
//   if (val > 2) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(res);

// FOURTH:-
// let val = arr.find(function (val) {
//   if (val === 3) {
//     return val;
//   }
// });
// console.log(val);

// FIFTH:-
// console.log(arr.indexOf(3));

// SECOND TOPIC OBJECTS:- ({})

// let val = {
//   name: "Ace",
//   age: 12,
// };
// Object.freeze(val);
// val.age = 23;
// console.log(val["name"]);
// console.log(val.age);

// Number of parameters is the length of the function
// function abcd(a, b, c) {}
// console.log(abcd.length);

// SYNC:- To run code line by lin.

// async function abcd() {
//   await fetch();
// }

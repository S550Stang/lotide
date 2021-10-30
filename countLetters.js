const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// an empty array always return 0
// an empty object will always return undefine

const countLetters = function (sentense) {
  let obj = {}; //initializing object
  let parah = sentense.replace(/ /g, ""); //removing white spaces
  for (let letter of parah) {
    if (obj[letter] === undefined) {
      //an object should always tackel with undefined because initially the object will be blank due
      obj[letter] = 1;
    } else {
      // console.log("found letter, added 1", letter);
      obj[letter] += 1;
    }
  }

  return obj;
};
let expectedobj = {
  M: 1,
  a: 2,
  n: 2,
  o: 3,
  g: 1,
  i: 1,
  s: 1,
  v: 1,
  e: 3,
  r: 2,
  p: 1,
  w: 1,
  d: 1,
};
let actualobj = countLetters("Manogna is over powered");
let val1 = "False";
let val2 = "False";
if (JSON.stringify(actualobj) === JSON.stringify(expectedobj)) {
  val1 = "True";
  val2 = "True";
}
assertEqual(val1, val2);

// call funciton

// const funA = function () {
//   console.log("funA", someAttribute);
// };
// const funB = function () {};
// const funC = function (fun) {
//   let total = funA.someAttribute + funB.newAttribute;
//   fun();
//   return total;
// };
// console.log(funA);
// funA.someAttribute = 45;
// funB.newAttribute = 600;
// console.log(funA);
//-------------------------------

const myFn = function () {
  // let someAttribute = 42;
  console.log("I am function.");
  console.log("data", someAttribute); //<-- this is local scope to function
};

myFn.someAttribute = 42;
console.log(myFn); //<----this prints someAttribute value =45
myFn(); //why doesnt this have a variable inside ?

// console.log(myFn.someAttribute);

// const runner = function (f) {
//   f();
//   console.log("replaced fun", f.someAttribute);
// };

// runner(myFn);

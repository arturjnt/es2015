'use strict';

// Default Parameters
function Person() {
  let name = arguments.length <= 0 || arguments[0] === undefined ? 'Artur' : arguments[0];

  var _ref = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  var _ref$age = _ref.age;
  let age = _ref$age === undefined ? 22 : _ref$age;
  var _ref$country = _ref.country;
  let country = _ref$country === undefined ? 'Portugal' : _ref$country;

  this.name = name;
  this.age = age;
  this.country = country;
}

Person.prototype.toString = function () {
  // CONST VARIABLE TYPE
  const INSTITUTE = 'ISEP';

  // Template String
  console.log(`${ this.name }, age ${ this.age } from ${ this.country }.
    Studying at ${ INSTITUTE }`);
};

// Arrow function
let createPersonAndPrint = (name, age, country) => {
  // LET VARIABLE TYPE
  let instance = new Person(name, { age: age, country: country });
  instance.toString();
};

// Very cool usage of default parameters
createPersonAndPrint(undefined, undefined, undefined);
createPersonAndPrint('André');
createPersonAndPrint('Sr. Carreira', 32);

// Rest params
function iterateArray() {
  for (var _len = arguments.length, iteratable = Array(_len), _key = 0; _key < _len; _key++) {
    iteratable[_key] = arguments[_key];
  }

  for (let element in iteratable) {
    console.log(iteratable[element]);
  }
}

iterateArray('ES2015', 'is', 'awesome!');

// Spread operator
let x = 'first',
    y = 'second',
    z = 'third';
let xyz = [x, y, z];

function spreadParams(x, y, z) {
  console.log(`x: ${ x } | y: ${ y } | z: ${ z }`);
}

spreadParams.apply(undefined, xyz);

// Object initializer shorthand
let shorty = { x, y, z };
console.log(`x: ${ shorty.x } | y: ${ shorty.y } | z: ${ shorty.z }`);

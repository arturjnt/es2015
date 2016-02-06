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
  // Template String
  console.log(`${ this.name }, age ${ this.age } from ${ this.country }.`);
};

// Arrow function
let createPersonAndPrint = (name, age, country) => {
  let instance = new Person(name, { age: age, country: country });
  instance.toString();
};

// Very cool usage of default parameters
createPersonAndPrint(undefined, undefined, undefined);
createPersonAndPrint('André');
createPersonAndPrint('Sr. Carreira', 32);

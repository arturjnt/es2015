'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

  // For ... of
  for (let element of iteratable) {
    console.log(element);
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

// Method initializer shorthand
function Someone() {
  const DIET = 'Vegan';

  return {
    printDiet() {
      console.log(`Diet for Someone is ${ DIET }`);
    }
  };
}

let thisGuy = new Someone();
thisGuy.printDiet();

// Merging properties with Object.assign
function styleMerger() {
  let options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  const defaults = {
    display: 'inline-block',
    padding: '15px',
    top: 'unset'
  };

  let finalStyle = Object.assign({}, defaults, options);

  console.log(finalStyle);
}

styleMerger({ padding: '59px' });

// Array destructuring
var _ref2 = ['start', 'curve', 'straight', 'curve', 'finish'];
let first = _ref2[0];

let rest = _ref2.slice(2);

console.log(`First: ${ first } | Rest: ${ rest }`);

// Array.find
let users = [{ name: 'John', admin: false }, { name: 'Jane', admin: true }, { name: 'Jim', admin: true }];

let admin = users.find(user => user.admin);

console.log(admin);

// Maps
let mapSettings = new Map();
mapSettings.set('user', 'John');
mapSettings.set('second', 'image');
mapSettings.set('last', ['array0', 'array1']);

for (let _ref3 of mapSettings) {
  var _ref4 = _slicedToArray(_ref3, 2);

  let key = _ref4[0];
  let value = _ref4[1];

  console.log(`${ key } - ${ value }`);
}

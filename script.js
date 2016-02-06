// Default Parameters
function Person(name = 'Artur', {age = 22, country = 'Portugal'} = {}) {
  this.name = name;
  this.age = age;
  this.country = country;
}

Person.prototype.toString = function() {
  // CONST VARIABLE TYPE
  const INSTITUTE = 'ISEP';

  // Template String
  console.log(`${this.name}, age ${this.age} from ${this.country}.
    Studying at ${INSTITUTE}`);
};

// Arrow function
let createPersonAndPrint = (name, age, country) => {
  // LET VARIABLE TYPE
  let instance = new Person(name, {age: age, country: country});
  instance.toString();
}

// Very cool usage of default parameters
createPersonAndPrint(undefined, undefined, undefined);
createPersonAndPrint('André');
createPersonAndPrint('Sr. Carreira', 32);

// Rest params
function iterateArray(...iteratable) {
  for (let element in iteratable) {
    console.log(iteratable[element]);
  }
}

iterateArray('ES2015', 'is', 'awesome!');

// Spread operator
let x = 'first', y = 'second', z = 'third';
let xyz = [x, y, z];

function spreadParams(x, y, z) {
  console.log(`x: ${x} | y: ${y} | z: ${z}`);
}

spreadParams(...xyz);

// Object initializer shorthand
let shorty = {x, y, z};
console.log(`x: ${shorty.x} | y: ${shorty.y} | z: ${shorty.z}`);

// Method initializer shorthand
function Someone() {
  const DIET = 'Vegan';

  return {
    printDiet() {
      console.log(`Diet for Someone is ${DIET}`);
    }
  };
}

let thisGuy = new Someone();
thisGuy.printDiet();

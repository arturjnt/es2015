// Default Parameters
function Person(name = 'Artur', {age = 22, country = 'Portugal'} = {}) {
  this.name = name;
  this.age = age;
  this.country = country;
}

Person.prototype.toString = function() {
  // Template String
  console.log(`${this.name}, age ${this.age} from ${this.country}.`);
};

// Arrow function
let createPersonAndPrint = (name, age, country) => {
  let instance = new Person(name, {age: age, country: country});
  instance.toString();
}

// Very cool usage of default parameters
createPersonAndPrint(undefined, undefined, undefined);
createPersonAndPrint('André');
createPersonAndPrint('Sr. Carreira', 32);

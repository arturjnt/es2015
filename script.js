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
  // For ... of
  for (let element of iteratable) {
    console.log(element);
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

// Merging properties with Object.assign
function styleMerger(options = {}) {
  const defaults = {
    display:  'inline-block',
    padding:  '15px',
    top:      'unset'
  };

  let finalStyle = Object.assign({}, defaults, options);

  console.log(finalStyle);
}

styleMerger({padding: '59px'});

// Array destructuring
let [first, , ...rest] = ['start', 'curve', 'straight', 'curve', 'finish'];
console.log(`First: ${first} | Rest: ${rest}`);

// Array.find
let users = [
  {name: 'John', admin: false},
  {name: 'Jane', admin: true},
  {name: 'Jim', admin: true}
];

let admin = users.find(user => user.admin);

console.log(admin);

// Maps
let mapSettings = new Map();
mapSettings.set('user', 'John');
mapSettings.set('second', 'image');
mapSettings.set('last', ['array0', 'array1']);

for (let [key, value] of mapSettings) {
  console.log(`${key} - ${value}`);
}

// Sets
let tags = new Set();

tags.add('JavaScript');
tags.add('Programming');
tags.add('Web');

for(let tag of tags){
  console.log(`Tag: ${tag}`);
}

console.log(tags.has('Web'));

// Classes
class Advertisement {

  constructor(title, link){
    this.title = title;
    this.link = link;
  }

  _buildContent(){
    return `<h1>${this.title}</h1>
      <a href="${this.link}">${this._linkText()}</a>`;
  }

  _linkText(){
    return "Click Here";
  }

  render(){
    return this._buildContent();
  }
}

// Here's an example of how this class is used:
/*
  let ad = new Advertisement("CodeSchool", "http://codeschool.com");
  _appendToPage( targetElement, ad.render() );
*/

class SidebarAdvertisement extends Advertisement {
  constructor(title, link) {
    super(title, link);
  }

  _linkText() {
    return 'Sign up now!';
  }
}

let Mouse = require('./Mouse');
let mouse = new Mouse('Tom');
let Dog = require('./Dog');

let dog = new Dog('Tom');

dog.eat(mouse);
console.log(mouse);
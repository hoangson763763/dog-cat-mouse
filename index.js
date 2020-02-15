let Mouse = require('./Mouse');
let mouse = new Mouse('Jerry');
let Dog = require('./Dog');
let Cat =  require('./Cat');
let cat = new Cat('Tom');
let dog = new Dog('Tom');
try {
	cat.eat(dog);
}
catch (error){
	console.log(error.message)
};


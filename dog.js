let chalk = require('chalk');
function Dog(name){
	this.stomach = [];
	this.name = name;
}
Dog.prototype.sayHi = function(){
	console.log('SayHi I am o dog,my name is ' + chalk.red(this.name));
};
Dog.prototype.eat = function(eat){
	this.stomach.push(eat);
	eat.dead = true;
}
module.exports = Dog;
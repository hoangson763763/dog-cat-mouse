let chalk = require('chalk');
function Dog(name){
	this.stomach = [];
	this.name = name;
}
Dog.prototype.sayHi = function(){
	console.log('SayHi I am o dog,my name is ' + chalk.red(this.name));
};
module.exports = Dog;
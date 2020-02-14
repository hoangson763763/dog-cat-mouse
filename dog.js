function Dog(name){
	this.stomach = [];
	this.name = name;
}
Dog.prototype.eat = function(cat){
	this.stomach.push(cat);
}
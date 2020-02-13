function Cat(name){
	this.name = name;
	this.stomach = [];
}
Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
}
function Mouse(name){
	this.name = name
}
cat = new Cat('Tom');
mouse = new Mouse('jerry')
cat.eat(mouse);
console.log(cat);
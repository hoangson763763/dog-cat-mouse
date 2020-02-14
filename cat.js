//working directory --
//staging area -- 
//git repository--
//git init --khoi tao
//git status --kiem tra trang thai
//git add	--them
//git commit -m --commit
//git log --kiem tra lich su da commit
//git show
//git diff --different
//git checkout --loại những file đã bị sửa ra
//git reset --quay lại
//git checkout -b <branch> (branchinh)
//git checkout <branch>
//git merge A <------ B : git checkout master ==> git merge B
//git reset --hủy commit đã tạo
let Mouse = require('./mouse.js');

function Cat(name){
	this.name = name;
	this.stomach = [];
}
Cat.prototype.eat = function(mouse){
	this.stomach.push(mouse);
}
console.log(Mouse)
cat = new Cat('Tom');
mouse = new Mouse('jerry')
cat.eat(mouse);
console.log(cat);
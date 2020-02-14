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
//git restore --staged <file> loại bỏ 1 file ra ngoài
//git checkout -b <branch> (branchinh)
//git checkout <branch>
//git merge A <------ B : git checkout master ==> git merge B
//git reset --sofr <commit> hủy commit đã tạo đưa về trạng thái đã add,những commit trước sẽ mất đi
//git reset --mixed <commit> hủy commit đã tạo đưa về trạng thái chưa add
//git reset --hard <commit> xóa hẳn commit
//git revert <commit>
//git remote add origin <link>
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
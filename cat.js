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
//git checkout -b <branch> (branchinh) tao 1 nhanh' (branch)
//git checkout <branch>
//git merge A <------ B : git checkout master ==> git merge B
//git reset --sofr <commit> hủy commit đã tạo đưa về trạng thái đã add,những commit trước sẽ mất đi
//git reset --mixed <commit> hủy commit đã tạo đưa về trạng thái chưa add
//git reset --hard <commit> xóa hẳn commit
//git revert <commit>
//git remote add origin <link>
//git push origin master --push code lên githud nhánh(branch) master
//git push origin <branch> push nhánh lên githud
//git clone <link repo>
//git pull
let Mouse = require('./Mouse');

function Cat(name){
	this.name = name;
	this.stomach = [];
}
Cat.prototype.eat = function(animal){
	if(animal instanceof Mouse)
	{
		animal.dead = true;
		this.stomach.push(animal);

	}
	else
	{
		throw new Error('Cat can only mouse eat');
	}
};
module.exports = Cat;
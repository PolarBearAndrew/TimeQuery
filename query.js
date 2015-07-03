
var list = [];

class Query{

	constructor(){
		this.list = [];
	}

	show(){
		console.log("list->", this.list);
	}

	add(str){
		this.list.push(str);
	}

}

module.exports = Query;
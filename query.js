
var list = [];

class Query{

	constructor(){
		this.list = {};
	}

	show(){
		console.log("Query Data", this.list);
	}

	add(key, job){
		this.list[key] = { job };
	}

}

class Job{

	constructor(){
		this.timeout = 0;
		this.todo;
		this.next = "";
	}

	constructor(time, func){
		this.timeout = time;
		this.todo = func;
		this.next;
	}
}

module.exports ={ Query, Job };
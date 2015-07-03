
var list = [];

class Query{

	constructor(){
		this.List = {};
		this.Keys = {
			first : '',
			last : ''
		}
	}

	show(){
		console.log('Query data', this.List);
		console.log('Key data ', this.Keys);
	}

	push(job){

		//set key id
		let d = new Date();
		let key = d.getTime() * Math.random();;

		//console.log('key', key);

		//push
		this.List[key] = { job };

		//link
		if(this.Keys.last){
			this.List[this.Keys.last].next = key;
		}
		this.Keys.last = key;
	}

}

class Job{

	constructor(){
		this.timeout = 0;
		this.todo;
		this.next = '';
	}

	constructor(time, func){
		this.timeout = time;
		this.todo = func;
		this.next = '';
	}
}

module.exports ={ Query, Job };
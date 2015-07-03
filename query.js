
var list = [];

class Query{

	constructor(){
		this.List = {};
		this.Keys = {
			first : '',
			last : ''
		};

		this.TimeRoute =[
			{ sec : 1000, last : '', },
			{ sec : 2000, last : '', },
			{ sec : 3000, last : '', },
			{ sec : 5000, last : '', },
			{ sec : 8000, last : '', },
			{ sec : 13000, last : '', } ];
	}

	setInRouter(id, time){
		this.TimeRoute.map(function(data){
			if( time == data.sec )
				data.last = id;
		});
	}

	show(){
		console.log('Query data', this.List);
		console.log('Key data ', this.Keys);
		console.log('time route ', this.TimeRoute);
	}

	push(job){
		//set key id
		let d = new Date();
		let key = d.getTime() * Math.random();;

		//push
		this.List[key] = { job };

		//link
		if(this.Keys.last){
			this.List[this.Keys.last].next = key;
		}
		this.Keys.last = key;

		//set route
		this.setInRouter(key, job.timeout);

		return key;
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
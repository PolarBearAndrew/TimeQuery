
var list = [];

class Query{

	//init
	constructor(){
		this.List = {};
		this.Flags = { head : '', tail : '', };

		this.FlagRouter =[
			{ sec : 1000, lastOneID : '', },
			{ sec : 2000, lastOneID : '', },
			{ sec : 3000, lastOneID : '', },
			{ sec : 5000, lastOneID : '', },
			{ sec : 8000, lastOneID : '', },
			{ sec : 13000, lastOneID : '', } ];
	}

	//set some id in router
	// setInRouter(id, time){
	// 	this.TimeRoute.map(function(data){
	// 		if( time == data.sec )
	// 			data.last = id;
	// 	});
	// }

	//auto inset some job in List, with sort
	// autoRouting(id, time){

	// 	let lastID = 0;

	// 	for (var i = this.TimeRoute.length - 1; i >= 0; i--) {

	// 		if(this.TimeRoute[i].sec < time){

	// 			lastID = this.TimeRoute[i].last;
	// 			break;

	// 		}else if(this.TimeRoute[i].sec == time){

	// 			this.TimeRoute[i].last = id;
	// 			lastID = this.TimeRoute[i].last;
	// 			break;
	// 		}
	// 	};

	// 	if( ! lastID ){
	// 		lastID = this.Keys.first;
	// 	}


	// 	this.autoRoutingSet(id, time, lastID);
	// }

	// //recursive
	// autoRoutingSet(id, time, lastOneID){

	// 	console.log('this.List[lastOneID]', this.List[lastOneID], lastOneID)

	// 	var nextID = this.List[lastOneID].job.next;

	// 	if( ! nextID ){

	// 		this.List[lastOneID].job.next = id;
	// 		this.Keys.last = id;

	// 		return;
	// 	}

	// 	var nextOneTime = this.List[nextID].timeout;

	// 	if( nextOneTime > time ){

	// 		this.List[lastOneID].job.next = id;
	// 		this.List[id].next = nextID;

	// 		return;

	// 	}else{
	// 		autoRoutingSet(id, time, nextID);
	// 	}
	// }

	// push( job ){
	// 	//set key id
	// 	let d = new Date();
	// 	let key = d.getTime() * Math.random();;

	// 	//push
	// 	this.List[key] = { job };

	// 	//link
	// 	if(this.Keys.last){
	// 		this.List[this.Keys.last].next = key;
	// 	}
	// 	this.Keys.last = key;

	// 	//set route
	// 	this.setInRouter(key, job.timeout);

	// 	return key;
	// }


	//auto inset on right position
	// add( job ){
	// 	//set key id
	// 	let d = new Date();
	// 	let key = d.getTime() * Math.random();;

	// 	//link
	// 	if( ! this.Keys.first ){
	// 		this.Keys.first = key;
	// 		this.Keys.last = key;

	// 	}else{
	// 		this.autoRouting(key, job.timeout)
	// 	}

	// 	//push
	// 	this.List[key] = { job };

	// 	//set route
	// 	this.setInRouter(key, job.timeout);

	// 	return key;
	// }

	add( job ){
		//set key id
		let d = new Date();
		let myKey = d.getTime() * Math.random();;

		if( ! this.Flags.head ){
			this.Flags.head = myKey;
			this.Flags.tail = myKey;

		}else{
			this.List[this.Flags.tail].next = myKey
			this.Flags.tail = myKey;
		}

		//push job to query
		this.List[myKey] = { timeOut: job.timeOut, todo:job.todo, next:job.next };


	}


	show(){
		console.log('Query data', this.List);
		console.log('Key data ', this.Keys);
		console.log('time route ', this.TimeRoute);
	}

	read(){

		this.readRecursive(this.Keys.first);


	}

	readRecursive( key ){

		console.log(key, this.List[key].job.timeout);

		if( this.List[key].job.next ){
			this.readRecursive(this.List[key].job.next);
		}else{
			console.log('--FINISH--');
			return;
		}
	}

}

class Job{

	constructor(){
		this.timeOut = 0;
		this.todo;
		this.next = '';
	}

	constructor(time, func){
		this.timeOut = time;
		this.todo = func;
		this.next = '';
	}
}

module.exports ={ Query, Job };
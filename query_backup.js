
var list = [];

class Query{

	//init
	constructor(){
		this.List = {};
		this.Endpoint = { head : '', tail : '', };


		//或許該新增自訂旗標的功能
		this.Flags =[
			{ flagTime : 1000, last : '', previous : '' },
			{ flagTime : 2000, last : '', previous : '' },
			{ flagTime : 3000, last : '', previous : '' },
			{ flagTime : 5000, last : '', previous : '' },
			{ flagTime : 8000, last : '', previous : '' },
			{ flagTime : 13000, last : '', previous : '' }, ];
	}

	add( job ){
		//set key id
		let d = new Date();
		let myKey = d.getTime() * Math.random();;

		if( ! this.Endpoint.head ){

			//init Endpoint
			this.Endpoint.head = myKey;
			this.Endpoint.tail = myKey;

			//init Flags
			//不能這樣處理, 這樣會導致後面要更新previos key的時候不知道誰前誰後

			// this.Flags.map(function(info, index){
			// 	if(index != 0 && info.flagTime > job.timeOut )
			// 		return info.previous = myKey;
			// });

		}else{

			this.router( myKey, job.timeOut );

			//這邊有問題 需要改
			// this.List[this.Endpoint.tail].next = myKey
			// this.Endpoint.tail = myKey;
		}

		//push job to query
		this.List[myKey] = {
			timeOut : job.timeOut,
			todo : job.todo,
			next : job.next, };

	}

	router( key, timeOut){

		for (var i = this.Flags.length - 1; i >= 0; i--) {

			if( this.Flags[i].flagTime == timeOut ){

				if( this.Flags[i].last ){

					this.List[this.Flags[i].last].next = key;
					this.Flags[i].last = key;

				}else if( this.Flags[i].previous ){

					this.List[this.Flags[i].previous].next = key;
					this.Flags[i].last = key;

				}else{

					//繼續找previous key
					let findPreviousKey = ( index ) => {

						if(this.Flags[index].previous)
							return this.Flags[index].previous;

						if( index > 0 )
							findPreviousKey( index - 1  );
						else
							return false;
					};

					let previousKey = findPreviousKey( i - 1 );

					if(previousKey)
						this.List[previous].next = key;
					else
						this.Endpoint.head = key;

					this.Flags[i].last = key;

				}

				break;

			}else if( this.Flags[i].flagTime < timeOut ){

			}


			//previous key
			if( i + 2 < this.Flags.length ){
				this.Flags[i+1].previous = key;
			}
		};
	}

	whoIsLastOne(){

	}

	show(){

		console.log('Query data', this.List);

		console.log('Endpoint data ', this.Endpoint);

		console.log('Flags data ', this.Flags);
	}

	// read(){
	// 	this.readRecursive(this.Keys.first);
	// }

	// readRecursive( key ){

	// 	console.log(key, this.List[key].job.timeout);

	// 	if( this.List[key].job.next ){
	// 		this.readRecursive(this.List[key].job.next);
	// 	}else{
	// 		console.log('--FINISH--');
	// 		return;
	// 	}
	// }

}

class Job{

	//並沒有相對可用來設定的func
	// constructor(){
	// 	this.timeOut = 0;
	// 	this.todo;
	// 	this.next = '';
	// }

	constructor(time, func){
		this.timeOut = time;
		this.todo = func;
		this.next = '';
	}
}

module.exports ={ Query, Job };
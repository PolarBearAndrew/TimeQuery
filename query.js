
var list = [];

class Query{

	//init
	constructor(){
		this.List = {};
		this.Endpoint = { head : '', tail : '', };


		//0.0.2或許該新增自訂旗標的功能
		this.Flags =[
			{ flagTime : 500, last : '', },
			{ flagTime : 1000, last : '', },
			{ flagTime : 1500, last : '', },
			{ flagTime : 2000, last : '', },
			{ flagTime : 2500, last : '', },
			{ flagTime : 3000, last : '', }, ];
	}

	add( job ){
		//set id
		let d = new Date();
		let myKey = d.getTime() * Math.random();

		//push job to query
		this.List[myKey] = {
			timeOut : job.timeOut,
			callback : job.callback,
			next : '',
			previous : '',
		};

		//router
		if( ! this.Endpoint.head ){

			//init Endpoint
			this.Endpoint.head = myKey;
			this.Endpoint.tail = myKey;

		}else{

			this.router( myKey );

		}


	}

	router( key ){

		let current = this.List[key];

		for (var i = this.Flags.length - 1; i >= 0; i--) {



			if( this.Flags[i].flagTime == current.timeOut ){

				let findLastKey = ( index ) => {

					if( this.Flags[index].last )
						return this.Flags[index].last;

					else if ( index > 0 )
						return findLastKey( index - 1 );

					else
						return this.Endpoint.head;
				};

				let lastKey = findLastKey(i);

				let last = this.List[lastKey];

				if( last.timeOut > current.timeOut ){

					this.Endpoint.head = key;
					current.next = lastKey;
					last.previous = key;

				}else{

					//link list
					current.next = last.next;
					current.previous = lastKey;

					last.next = key;

					if(current.next)
						this.List[ current.next ].previous = key;
					else
						this.Endpoint.tail = key;

				}

				break;

			}else if ( this.Flags[i].flagTime < current.timeOut ){
				i--;
			}
		};
	}

	show(){

		console.log('Query data', this.List);

		console.log('Endpoint data ', this.Endpoint);

		console.log('Flags data ', this.Flags);
	}

}

class Job{

	//並沒有相對可用來設定的func
	// constructor(){
	// 	this.timeOut = 0;
	// 	this.callback;
	// 	this.next = '';
	// }

	constructor(time, func){
		this.timeOut = time;
		// this.next = '';
		// this.previous = '';
		this.callback = func;
	}
}

module.exports ={ Query, Job };
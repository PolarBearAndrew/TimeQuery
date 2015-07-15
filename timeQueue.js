
class Queue{

	//init
	constructor(){
		this.engin;
		this.head = null;
		this.FlagsHead = null;	// 用來協助跳躍尋找
	}

	add( job ){
		if(this.head === null) {
			this.head = job;
			this.FlagsHead = new Flags(job.timeout, job);
		} else {
			this.router( job );
		}
	}

	// 更新最前頭 flag
	updateHeadFlags(current) {
		var newFlag = new Flags(current.timeout, current);
		newFlag.next = this.FlagsHead;
		this.FlagsHead.previous = newFlag;
		this.FlagsHead = newFlag;
	}

  // 找尋比目前新增工作的 timeout 小但最接近的 Flag
	findNearestFlag(timeout) {
		var pointer = this.FlagsHead;
		while(pointer.timeout <= timeout) {
			if(pointer.next !== null) {
				pointer = pointer.next;
			} else {
				return pointer;
			}
		}
		return pointer.previous;
	}

	// 更新 job list 跟 調整 flag list
	router( current ){
		var pointer = this.head;
		if(current.timeout < pointer.timeout) {
			current.next = pointer;
			pointer.previous = current;
			this.head = current;
			this.updateHeadFlags(current);
		} else {
			var flag = this.findNearestFlag(current.timeout);
			// 沒有找到這次 job 的 flag (timeout不一樣），所以要新增一個 flag 進去 flag list 裡
			if(flag.timeout !== current.timeout) {
				var newFlag = new Flags(current.timeout, current);
				if(flag.next !== null) {
					flag.next.previous = newFlag
					newFlag.next = flag.next;
				}
				flag.next = newFlag;
				newFlag.previous = flag;
			}
			// 更新 job list
			if(flag.job.next !== null){
				flag.job.next.previous = current;
				current.next = flag.job.next;
			}
			flag.job.next = current;
			current.previous = flag.job;
			// 如果是要找到 flag 的，必須要更新一下 flag 所指向的最後一個
			if(flag.timeout === current.timeout) {
				flag.job = current;
			}
		}
	}

	do( current, now ){
		if(current.timeout <= now){
			current.callback();
			if( current.next !== null){
				current = current.next;
				return this.do( current, now );
			}else{
				clearInterval(this.engin);
				console.log('-----finish-----');
			}
		}else{
			return current;
		}
	}

	start( ctrlTick ){
		let current;
		let time = 0;
		if( time == 0 )
			current = this.head;
		this.engin = setInterval( () => {
			if( ctrlTick )
				console.log('tick');
			current = this.do( current, time );
			time += 100;

		}, 100);
	}
}

class Job{
	constructor(time, func){
		this.timeout = time;
		this.callback = func;
		this.next = null;
		this.previous = null;
	}
}

class Flags {
	constructor(timeout, job) {
		this.timeout = timeout;
		this.job = job;
		this.next = null;
		this.previous = null;
	}
}

module.exports ={ Queue, Job };
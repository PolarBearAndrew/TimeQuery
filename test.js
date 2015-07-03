var Query = require("./query.js").Query;
var Job = require("./query.js").Job;

var timeQuery = new Query();

timeQuery.add( 'key-A', new Job( 1, function(){
	console.log('job 1 !!');
}));
// timeQuery.add('B', 'dataB');
//
//


timeQuery.show();
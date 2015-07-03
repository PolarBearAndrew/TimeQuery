var Query = require("./query.js").Query;
var Job = require("./query.js").Job;

var timeQuery = new Query();

timeQuery.push( new Job( 1, function(){
	console.log('job 1 !!');
}));


timeQuery.push( new Job( 2, function(){
	console.log('job 2 !!');
}));
// timeQuery.add('B', 'dataB')


timeQuery.show();
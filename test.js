var Query = require("./query.js").Query;
var Job = require("./query.js").Job;

var timeQuery = new Query();

timeQuery.add( new Job( 5000, function(){
	console.log('job 1 !!');
}));


timeQuery.add( new Job( 2000, function(){
	console.log('job 2 !!');
}));

timeQuery.add( new Job( 2000, function(){
	console.log('job 2 !!');
}));

// timeQuery.add( new Job( 3000, function(){
// 	console.log('job 3 !!');
// }));

// timeQuery.add( new Job( 3000, function(){
// 	console.log('job 4 !!');
// }));

// timeQuery.add( new Job( 3000, function(){
// 	console.log('job 5 !!');
// }));


// timeQuery.add( new Job( 2000, function(){
// 	console.log('job 5 !!');
// }));

// timeQuery.add('B', 'dataB')

timeQuery.show();

//timeQuery.read();
//require
var TimeQuery = require("./timeQuery.js");
var Job = TimeQuery.Job;

var myTimeQuery = new TimeQuery.Query();

//myTimeQuery.add( new Job( 3000, 'func 6' ) );
myTimeQuery.add( new Job( 3000, () => console.log('job 6') ) );

myTimeQuery.add( new Job( 1500, () => console.log('job 2') ) );

myTimeQuery.add( new Job( 1000, () => console.log('job 1') ) );

myTimeQuery.add( new Job( 1500, () => console.log('job 3') ) );

myTimeQuery.add( new Job( 1500, () => console.log('job 4') ) );

myTimeQuery.add( new Job( 2500, () => console.log('job 5') ) );

myTimeQuery.add( new Job( 5000, () => console.log('job 7') ) );

//without tick
myTimeQuery.start();

//see the tick
// myTimeQuery.start(1);

//show all data, using in debug
// myTimeQuery.showAllData();
// console.log( myTimeQuery.readAll(1) );
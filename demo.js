//require
var TimeQueue = require("./TimeQueue.js");
var Job = TimeQueue.Job;

var myTimeQueue = new TimeQueue.Queue();

//myTimeQueue.add( new Job( 3000, 'func 6' ) );
myTimeQueue.add( new Job( 3000, () => console.log('job 6') ) );

myTimeQueue.add( new Job( 1500, () => console.log('job 2') ) );

myTimeQueue.add( new Job( 1000, () => console.log('job 1') ) );

myTimeQueue.add( new Job( 1500, () => console.log('job 3') ) );

myTimeQueue.add( new Job( 1500, () => console.log('job 4') ) );

myTimeQueue.add( new Job( 2500, () => console.log('job 5') ) );

myTimeQueue.add( new Job( 5000, () => console.log('job 7') ) );

//without tick
myTimeQueue.start();

//see the tick
// myTimeQueue.start(1);

//show all data, using in debug
// myTimeQueue.showAllData();
// console.log( myTimeQueue.readAll(1) );
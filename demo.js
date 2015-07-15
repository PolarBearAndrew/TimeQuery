//require
var TimeQueue = require("./TimeQueue.js");
var Job = TimeQueue.Job;

var myTimeQueue = new TimeQueue.Queue();

myTimeQueue.add( new Job( 3000, () => console.log('job 8 - 3000') ) );

myTimeQueue.add( new Job( 1500, () => console.log('job 3 - 1500') ) );

myTimeQueue.add( new Job( 1321, () => console.log('job 2 - 1321') ) );

myTimeQueue.add( new Job( 1000, () => console.log('job 1 - 1000') ) );

myTimeQueue.add( new Job( 1500, () => console.log('job 4 - 1500') ) );

myTimeQueue.add( new Job( 1500, () => console.log('job 5 - 1500') ) );

myTimeQueue.add( new Job( 2500, () => console.log('job 7 - 2500') ) );

myTimeQueue.add( new Job( 1500, () => console.log('job 6 - 1500') ) );

myTimeQueue.add( new Job( 5000, () => console.log('job 9 - 5000') ) );

//without tick
myTimeQueue.start();

//see the tick
// myTimeQueue.start(1);

//show all data, using in debug
// myTimeQueue.showAllData();
// console.log( myTimeQueue.readAll(1) );
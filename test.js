var Query = require("./query.js").Query;
var Job = require("./query.js").Job;

var timeQuery = new Query();

timeQuery.add( new Job( 3000, 'func 6'));
timeQuery.add( new Job( 1500, 'func 1'));
timeQuery.add( new Job( 1500, 'func 2'));
timeQuery.add( new Job( 2000, 'func 4'));
timeQuery.add( new Job( 2500, 'func 5'));
timeQuery.add( new Job( 5000, 'func 7'));
timeQuery.add( new Job( 1500, 'func 3'));

console.log( timeQuery.readAll(1) );
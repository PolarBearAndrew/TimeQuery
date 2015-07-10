var TimeQuery = require("./query.js").TimeQuery;
var Job = require("./query.js").Job;

var myTimeQuery = new TimeQuery();

myTimeQuery.add( new Job( 3000, 'func 6' ) );
myTimeQuery.add( new Job( 1500, 'func 1' ) );
myTimeQuery.add( new Job( 1500, 'func 2' ) );
myTimeQuery.add( new Job( 2000, 'func 4' ) );
myTimeQuery.add( new Job( 2500, 'func 5' ) );
myTimeQuery.add( new Job( 5000, 'func 7' ) );
myTimeQuery.add( new Job( 1500, 'func 3' ) );

//console.log( myTimeQuery.readAll(1) );

//myTimeQuery.show();

myTimeQuery.start();
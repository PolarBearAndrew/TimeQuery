# TimeQuery
A time query for node.js.

If you need to use a lot of 'setTimeout' function. Use TimeQuery to reduce your server's load. TimeQuery only need one 'setInterval' function to imitate all 'setTimeout'.

How to start demo, you can see a simple demo

```
babel-node demo.js
```

(1) Require

```
var TimeQuery = require("./timeQuery.js");
```

(2) New a query

```
var myTimeQuery = new TimeQuery.Query();
```

(3) Get the job class

```
var Job = TimeQuery.Job;
```

(4) Add a job in query.

```
// new Job( timeOut, callback )
myTimeQuery.add( new Job( 3000, () => console.log('job 1') ) );
```

(5) Start time engin,

```
myTimeQuery.start();
```
or you want to see the time ticks

```
myTimeQuery.start(1); //show ticks, 100ms per each
```

And than you will see the job will working on the time you want.
# TimeQuery
A time query for node.js

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

(4) Add a job in query

```
myTimeQuery.add( new Job( 3000, () => console.log('job 1'); ) );
```
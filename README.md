修改的說明：   

如果要用雙向 list，或維持你原本的思維，我會這樣做：0a9f33ce9744adc344b637d7797cde49a0cf0f08     

可以看一下 commit 的歷程：

- 我第一步(aa6a5912030dd36687638e686a580e2588a0d22a)是讓 List 不需要複雜的key。


- 然後我更新的第二步(0a9f33ce9744adc344b637d7797cde49a0cf0f08)是：
  - 移掉 List[] 這個陣列，因為你已經用了雙向陣列了，其實可以直接指向下一個/上一個物件，而不需要去儲存陣列的index。
  - 連 Flag 都用雙向 list 去維護，這樣可以動態新增不同的 timeout。   


（**以下想法僅推測，沒有實作驗證。**）     
其實好像用 min-heap tree 也很不錯，我們這樣的做法，在新增 job 的時候可能會有 O(N)，但是 min-heap 的 root 就是 min，delete 一個也只要 O(log N)，理論上會更有效率。    

另外一種做法是 Flag 用 binary search tree 去做，然後每個 flag 維護自己的job list，也就是如果有 3 種 flag，就會有三條 job list，這種方式並不會比較消耗空間*，可是實作起來應該會比目前的更容易一些。

* 空間方面，理論上是會比較消耗，因為樹要記左、右，可是 flag 應該不會太分散，或是這邊可以再偷作弊，例如把每 100 ms 區間的放一起。    

深入淺出 Node.js 那本書有提到，setTimeout 與 setInterval 建立計時器時，是用內部的一個紅黑樹在維護的，或許這邊也可用紅黑樹做。



# TimeQueue
A time queue for node.js.

If you need to use a lot of 'setTimeout' function. Use TimeQuery to reduce your server's load. TimeQuery only need one 'setInterval' function to imitate all 'setTimeout'.

How to start demo?
You can see a simple demo

```
babel-node demo.js
```

(1) Require

```
var TimeQuery = require("./timeQuery.js");
```

(2) New a queue

```
var myTimeQuery = new TimeQuery.queue();
```

(3) Get the job class

```
var Job = TimeQuery.Job;
```

(4) Add a job in queue.

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

And than you will see the job working on the time you want.     

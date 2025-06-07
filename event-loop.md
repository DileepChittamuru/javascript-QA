<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Event Loop</h1>
</div>

**EventLoop**
 - To handle the asynchronous operation.
 - event loop will be  continously checking the call stack is empty.
 - Executes Micro tasks ie Promise.then / catch // finally
 - Exutest Macro taks setTimeOut / SetInterval
 - This repeats

 - IIFE is part of javascript ie synchronous operation

###### 1. What is the output?

```javascript
console.log('Start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

(async function () {
  console.log('async IIFE - before await');
  await null;
  console.log('async IIFE - after await');
})();

Promise.resolve().then(() => {
  console.log('Promise.then');
});

console.log('End');

(function () {
  console.log('async IIFE');
  console.log('async IIFE');
})();


```
<details><summary><b>Answer</b></summary>
<p>
"Start"
"async IIFE - before await"
"End"
"async IIFE"
"async IIFE"
"async IIFE - after await"
"Promise.then"
"setTimeout"
</p>
</details>

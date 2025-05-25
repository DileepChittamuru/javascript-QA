<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Arrays JavaScript Questions</h1>
</div>



###### 1. What's the output?

```javascript
// reduce  To convert array to single value or Object or Array
const sum = [1,2,3,4,5, 6].reduce((acc, cur, index, arr) =>{
    acc = acc+cur;
    return acc;
  },0);
  console.log("object or array or num",sum);
  
  // map - used for tranforming array 
  const map = [1,2,3,4,5].map(val => val*2);
  console.log("new array",map);
  
  // filter
  const fltr = [20, 30, 43, 21].filter(val => val<30);
  console.log("new array",fltr);
  
  // every return boolean
  const evry = [20, 30, 43, 21].every(val => val>10);
  console.log("every boolean", evry);
  
  // find return value
  const fnd = [20, 30, 43, 21].find(val => val>40);
  console.log("find: reruns value", fnd);
  
  // returns the index of find value
  const fndIndx = [20, 30, 43, 21].findIndex(val => val> 40);
  console.log("findIndex returns index", fndIndx);
  
  // sort return array modifies current array
  const srt = [20, 30, 43, 21].sort((a,b) => a-b);
  console.log("sort: modifies exisisting array", srt);
  
  //push add at end of array and returns the new length of the array.
  const psh = [20, 30, 43, 21].push(46);
  console.log("push returns length", psh);
  
  // pop removes st end of array and returns removed item of the array
  const pop = [20, 30, 43, 21].pop();
  console.log("pop", pop);
  
  // shift removes element at starting of array and returns removed item
  const shft = [20, 30, 43, 21].shift();
  console.log("shift", shft);
  
  // unshift adds at begining of array and returns size of array
  const unshft = [20, 30, 43, 21].unshift(34);
  console.log("unshft", unshft);
  
  // slice method returns new array
  const slc = ['ant', 'bison', 'camel', 'duck', 'elephant'].slice(2,4)
  console.log("slc", slc);
  
  // splice (not clear)
  const splc = ['ant', 'bison', 'camel', 'duck', 'elephant'].splice(2,4);
  
  // include @reurns boolean
  const incl = ['ant', 'bison', 'camel', 'duck', 'elephant'].includes('ant');
  console.log('includes', incl);
  
  // indexOf @return indexVal or -1
  const ind = ['ant', 'bison', 'camel', 'duck', 'elephant'].indexOf('bison');
  console.log('indexOf', ind);
  
  // converts string to array
  const frm = Array.from('abc');
  console.log('from', frm)
  
  const jon = ['dilep', 'reddy'].join();
  console.log('join', jon)
```
<details><summary><b>Answer</b></summary>
<p>
</p>
</details>

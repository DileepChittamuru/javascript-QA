<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>ES6 JavaScript Questions</h1>
</div>



###### 1. What are es6 features?

```javascript
// constants
const a =20;

// block scope
if(true) {
  var b = 20;
  let c= 30;
}
console.log('var b', b);
//console.log('let c', c);

// default parameyters
function fun (x, y = 7, z = 42) {
    return x + y + z
}
console.log(fun(1));

// rest paramters

function rest (x, y, ...z) {
    console.log(z);
    return (x + y) * z.length
}
console.log(rest(1, 2, "hello", true, 7)); 

// spread operator
// for merging arrays or objects
var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ];
console.log(other);
var obj1 = { name: 'suji'}
var obj2 = { age: 26};
var obj3 = {...obj1, ...obj2};
console.log(obj3);

// string interpolation
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`

// destructuring

let obj4 = { name: 'suji', age: 27, degree: 'cse'};
let {name} = obj4;
console.log(name);

// array destructuring
const list = [ 'suji', 'dileep', 'shritha' ];
 let [ d,  e, f] = list;
console.log('test',d,e,f);
```
<details><summary><b>Answer</b></summary>
<p>
</p>
</details>

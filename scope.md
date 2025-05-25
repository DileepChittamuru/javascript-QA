<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Scope JavaScript Questions</h1>
</div>

**let**
 - The let declaration declares re-assignable.
 - block-scoped local variables.
 - optionally initializing each to a value. 

###### 1. What's the output?

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();
```
<details><summary><b>Answer</b></summary>
<p>

#### Answer: `undefined` and `ReferenceError`

 - Variable decalred with var keyword can be used before access before the declaration, but it returns undefined.
 - Varaiable declared with let keyword can't be accessed before the declaration, if you access it will return ReferenceError
</p>
</details>

##### 2. What's the output

```javascript

console.log('y',y);
y = 20;

console.log(a);
var a = 10;

b = 20;
console.log(b)

var c;
console.log('c', c)

var d = 1;
console.log("d", d);

var e = 2;
console.log('e', e);

var f = 1;
var f = 2;
console.log(f, f);

console.log('g', g);
var g = 1;

```
<details>
<summary><b>Answer</b></summary>
<p>
 y 20 <br>
 a 10 <br>
 b 20 <br>
 c undefined <br>
 d 1 <br>
 e 2 <br>
 f 2 <br>
 g undefined <br>
</p>
</details>

##### 3. What's the output

```javascript
function hoistExample() {
    console.log("Before: ", a);
    var a;
    a = 10;
    console.log("After: ", a);
}
hoistExample();
```
<details>
  <summary><b>Answer</b></summary>
  <p>Before: undefined</p>
  <p>After: 10</p>
</details>

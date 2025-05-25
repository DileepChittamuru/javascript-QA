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

###### 4. What's the output?

```javascript
function hoistingExample() {
a = 1;
}
hoistingExample();
console.log(a);
```
<details><summary><b>Answer</b></summary>
<p>1</p>
</details>

###### 5. What's the output?

```javascript
function hoistingExample() {
    var a = 1;
}
hoistingExample();
console.log(a);
```
<details><summary><b>Answer</b></summary>
<p>undefined</p>
</details>


###### 6. What's the output?

```javascript
function hoistingExample() {
    var a = 1;
}
hoistingExample();
console.log(a);
```
<details><summary><b>Answer</b></summary>
<p>1</p>
</details>


###### 7. What's the output?

```javascript
function hoistingExample() {
  if (true) {
    var a = 1;
  }
  console.log('inner is', a);
}
hoistingExample();
console.log('outer is',a);
```
<details><summary><b>Answer</b></summary>
<p>inner is 1</p>
<p>outer is 1</p>
</details>

###### 8. What's the output?

```javascript
function a() {
  console.log("1")
}
a();
function a() {
  console.log("2")
}
a();
```
<details><summary><b>Answer</b></summary>
<p>2</p>
<p>2</p>
</details>

###### 9. What's the output?

```javascript
var test = 1;
function functionHoisting() {
  test = 10;
  console.log('test', test)
  return;
  function test() { }
}
functionHoisting();
console.log(test);
```
<details>
    <summary><b>Answer</b></summary>
    <p>test 10</p>
    <p>1</p>
</details>

###### 10. What's the output?

```javascript
alert(a());
function a() {
  var b = function() {
    return 3;
  };
  return b();
  var b = function() {
    return 8;
  };
}
```
<details>
    <summary><b>Answer</b></summary>
    <p>test 10</p>
    <p>1</p>
</details>

###### 11. What's the output?

```javascript
alert(a());
function a() {
  function b() {
    return 3;
  }
  return b();
  function b() {
    return 8;
  }
}
```
<details>
    <summary><b>Answer</b></summary>
    
</details>

###### 12. What's the output?

```javascript
function x() {
  y = 1;
  var z = 2;
}
x();
console.log(y);
console.log(z);
```
<details>
    <summary><b>Answer</b></summary>
</details>

###### 13. What's the output?

```javascript
console.log(a);
var a = 'xyz';

console.log(b);
let b = 'xyz';

console.log(c);
const c = 'xyz';
```
<details>
    <summary><b>Answer</b></summary>
</details>

###### 14. What's the output?

```javascript
console.log(a);
var a = 'xyz';

console.log(b);
let b = 'xyz';

console.log(c);
const c = 'xyz';
```
<details>
    <summary><b>Answer</b></summary>
</details>

###### 15. What's the output?

```javascript
if (true) {
  let foo = "abc";
  let foo;
}

if (true) {
  let too = "abc";
}
console.log(too);
```
<details>
    <summary><b>Answer</b></summary>
</details>



<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>this JavaScript Questions</h1>
</div>



###### 1. What's the output??

```javascript
if(globalThis === this) {
  console.log('true'); 
}
```
<details><summary><b>Answer</b></summary>
<p> ture</p>
</details>

###### 2. What's the output??

```javascript
function a() {
  console.log(this); 
}
a(); 
```
<details><summary><b>Answer</b></summary>
<p> </p>
</details>

###### 3. What's the output??

```javascript
function test(){
  function b () {
    console.log(this.name);
  }

  var obj = {
    name: 'dileep',
    b
  }

  obj.b(); 
  var obj2 = {
    name: 'suji',
    b
  }
  obj2.b();// suji
}
```
<details><summary><b>Answer</b></summary>
<p> </p>
</details>

###### 4.What's the output?

```javascript
function(){
  var obj = {a: 'Custom'};
  var a = 'Global';
  function whatsThis() {
    return this.a;
  }
  console.log(whatsThis()); // global
  console.log(whatsThis.call(obj));
  console.log(whatsThis.apply(obj));
}
```
<details><summary><b>Answer</b></summary>
<p> </p>
</details>

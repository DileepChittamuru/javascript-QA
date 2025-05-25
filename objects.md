<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Objects JavaScript Questions</h1>
</div>



###### 1. What's the output?

```javascript
function create() {
    const obj = {
      name: 'dileep',
      age: 21
    };
    const newObj = Object.create(obj);
    newObj.address = 'nellore';
    console.log(`create newObj`, newObj);
    console.log(`create newObj`, newObj.address);
  }
```
<details><summary><b>Answer</b></summary>
<p>
</p>
</details>

###### 2. What's the output?

```javascript
function entry(){
    const obj = {
    name: 'dileep',
    age: 21
    };
    console.log(Object.entries(obj));
}
```
<details><summary><b>Answer</b></summary>
<p>
</p>
</details>

###### 3. What's the output?

```javascript
function mapFun(){
    let map = new Map();
    map.set('name', 'dileep');
    map.set('age', 30);
    var obj = Object.fromEntries(map);
    console.log(`map to obj`, obj);
}
```
<details><summary><b>Answer</b></summary>
<p>
</p>
</details>


###### 4. What's the output?

```javascript
function wordCount(str) {
    let obj = {};
    for (let prop of str) {
      if(Object.hasOwn(obj, prop)) {
        obj[prop] = obj[prop] + 1;
      } else {
        obj[prop] = 1;
      }
    }
    console.log(obj);
}
```
<details><summary><b>Answer</b></summary>
<p>
</p>
</details>

###### 5. What's the output?

```javascript
function wordCount(str) {
    let obj = {};
    for (let prop of str) {
      if(Object.hasOwn(obj, prop)) {
        obj[prop] = obj[prop] + 1;
      } else {
        obj[prop] = 1;
      }
    }
    console.log(obj);
}
```
<details><summary><b>Answer</b></summary>
<p>
</p>
</details>

###### 6. What's the output?

```javascript
function check(){
  console.log(Object.is(10,10));
  console.log(Object.is(10,'10'));
  console.log(Object.is(true,'true'));
}
```
<details><summary><b>Answer</b></summary>
<p>
</p>
</details>

###### 7. What's the output?

```javascript
function iterate(){
  const obj = {
    name: 'dileep',
    age: 21
  };
  Object.entries(obj).forEach(([key, value]) => { console.log(key, value) });
}
```
<details><summary><b>Answer</b></summary>
<p>
</p>
</details>

###### 8. What's the output?

```javascript
function iterate(){
  const obj = {
    name: 'dileep',
    age: 21
  };
  Object.keys(obj).forEach((key) => { console.log(key, obj[key]) });
}
```
<details><summary><b>Answer</b></summary>
<p>
</p>
</details>

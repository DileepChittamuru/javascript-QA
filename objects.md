<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Objects JavaScript Questions</h1>
</div>



###### 1. What's the output?

```javascript
const obj = {
  name: 'dileep',
  age: 21
};
const newObj = Object.create(obj);
newObj.age = 31;
newObj.name= "suji"
console.log(`create newObj`, newObj.age, obj.age, obj.name, newObj.name);


const proto = { a: 1, b: { c: 2 } };

const obj2 = Object.create(proto);

console.log(obj2.a); // 1 (inherited, not copied)
console.log(obj2.b.c); // 2 (inherited)

obj2.b.c = 42;
obj2.a = 'test'
console.log(proto.b.c);
console.log(proto.a)

```
<details><summary><b>Answer</b></summary>
<p>
  primtives cant be shadow here
  object will shadow here
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
[["name", "dileep"], ["age": 21]]
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
{name: 'dileep', age: 30}
</p>
</details>


###### 4. What's the output?

```javascript
function wordCount(str) {
    let obj = {};
    for (let prop of str) {
      obj[prop] = (obj[prop] ?? 0) + 1;
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

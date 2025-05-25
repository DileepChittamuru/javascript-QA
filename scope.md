<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Scope JavaScript Questions</h1>
</div>

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

- A: `Lydia` and `undefined`
- B: `Lydia` and `ReferenceError`
- C: `ReferenceError` and `21`
- D: `undefined` and `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: D

 - Variable decalred with var keyword can be used before access before the declaration, but it returns undefined.
 - Varaiable declared with let keyword can't be accessed before the declaration, if you access it will return ReferenceError
</p>
</details>

<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>Arrow Functions JavaScript Questions</h1>
</div>



###### 1. What's the output?

```javascript
const obj = {
  name: 'dileep',
  fun: function() {
    console.log("normal",this.name);
  },
  arrfun: () => {
    console.log("arow",this.name);
  }
}
obj.fun();
obj.arrfun();
```
<details><summary><b>Answer</b></summary>
<p>
</p>
</details>

###### 2. What's the output?

```javascript
const normalPerson = {
  name: 'Dileep',
  age: '29',
  test: function() {
    console.log('normalPerson test()',this.age); // person
    function nested() {
      console.log('normalPerson nested()',this.age); // window
    }
    nested();
  }
}
normalPerson.test();
```
<details><summary><b>Answer</b></summary>
<p>
</p>
</details>

###### 3. What's the output?

```javascript
const arrowPerson = {
  name: 'Dileep',
  age: '29',
  test: function() {
    console.log('arrowperson test',this.age); // person
    let nested = () => { console.log('arrowperson nested', this.age)}
    nested();
  }
}
arrowPerson.test();
```
<details><summary><b>Answer</b></summary>
<p>
</p>
</details>

###### 4. What's the output?

```javascript
const arrowPerson = {
  name: 'Dileep',
  age: '29',
  test: function() {
    console.log('arrowperson test',this.age); // person
    let nested = () => { console.log('arrowperson nested', this.age)}
    nested();
  }
}
arrowPerson.test();
```
<details><summary><b>Answer</b></summary>
<p>
</p>
</details>

###### 5. What's the output?

```javascript
const person3 = {
  name: 'Dileep',
  age: '29',
  test: function() {
    var self = this; // person
    function nested() {
      console.log('nested', self.age); // person
    }
    return nested();
  }
}
person3.test();
```
<details><summary><b>Answer</b></summary>
<p>
</p>
</details>

###### 6. What's the output?

```javascript
const person4 = {
  name: 'Dileep',
  age: '29',
  test: function() {
    console.log('test',this.age); // person
    function nested() {
      console.log('nested',this.age); // window
    }
    return  nested.bind(this);
  }
}
person4.test();
```
<details><summary><b>Answer</b></summary>
<p>
</p>
</details>

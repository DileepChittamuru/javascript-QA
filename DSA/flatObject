**Flat Nested Array**

Write a custom function to display an object

```javascript

function renderObj(obj2) {
  for (let key in obj2) {
    let value = obj2[key];
    if(typeof value === 'object') {
      renderObj(value)
    } else {
      console.log(`${key} : ${value}`)
    }
  }
}
let obj = {
  name: 'Dileep',
  age: 20,
  children: ['shritha', 'anvitha'],
  address: {
    state: {
      name: 'Andhra Pradesh',
      code: 'ap',
      city: {
        name: 'nellore',
        code: 'nlr'
      }
    }
  }
}

renderObj(obj)



```


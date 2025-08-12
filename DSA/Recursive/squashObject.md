***Squash Object***

Implement a function that returns a new object after squashing the input object into a single level of depth where nested keys are "squashed" together with a period delimiter (.).

```javascript
const object = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: 3,
    },
  },
};

squashObject(object); // { a: 5, b: 6, 'c.f': 9, 'c.g.m': 17, 'c.g.n': 3 }

```

```javascript
export default function squashObject(obj) {
 let result = {};
  let prefix = '';
  function recursive(currentObject, currentPrefix) {
    for (let [key, value] of Object.entries(currentObject)) {
      const newkey = currentPrefix ? `${currentPrefix}.${key}` : key;
       if(value && typeof value === "object" && typeof value !== null) {
        recursive(value, newkey);
      } else {
        result[newkey] = value;
      }
    }
  }
  recursive(obj, prefix);
  return result;
}

const obj = {
  a: 5,
  b: 6,
  c: {
    f: 9,
    g: {
      m: 17,
      n: 3,
    },
  },
};
squashObject(obj);
```

**Flat Nested Array**

Write a custom function to display an object

```javascript
function deepClone(value) {
  // handle Primitives
  if (typeof value === null || typeof value !== "object") {
    return value;
  }

  // handle arrays
  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  // handle objects
  if (typeof value === "object") {
    let newObj = {};
    for (let [key, val] of Object.entries(value)) {
        newObj[key] = deepClone(val);
    }
    return newObj;
  }

  // other values
  return value;
}

const obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
  f: [5, 6],
};

deepClone(obj);

```


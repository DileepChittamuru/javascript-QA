**Deep Omit Object**

Implement a function deepOmit(obj, keys) that removes specified keys and their corresponding values from an object, including nested objects or arrays. It works recursively to traverse through the entire object structure, ensuring that all occurrences of the specified keys are removed at all levels. The function takes in an object (obj) and an array of string keys (keys).

**Code**

```javascript
function deepOmit(value, keys) {
  // handle Primitives
  if (typeof value === null || typeof value !== "object") {
    return value;
  }

  // handle arrays
  if (Array.isArray(value)) {
    return value.map((item) => deepOmit(item, keys));
  }

  // handle objects
  if (typeof value === "object") {
    let newObj = {};
    for (let [key, val] of Object.entries(value)) {
      if (!keys.includes(key)) {
        newObj[key] = deepOmit(val, keys);
      }
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

deepOmit(obj, ['b', 'c', 'e']); // { a: 1, f: [5, 6] }

```

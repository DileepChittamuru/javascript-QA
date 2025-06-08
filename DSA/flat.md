**Flat Nested Array**

```javascript

function flatten(arr) {
    let result = []
    for(let val of arr) {
        if(Array.isArray(val)) {
            result = [...result, ...flatten(val)]
        } else {
            result.push(val)
        }
    }
   return result
}

flatten([1, [2, [3, [4]])

```

**Explanation**

- Create an result array
- Iterate over the array
- when the value is array, do a recursion otherwise push in result array
- recursion method should have return value, so that it the remember the previous result.



**Answer**

[1,2,3,4]

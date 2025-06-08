**Flat Nested Array**

How result variable can remember the previous result in execution, recursive method has return value.

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



**Answer**

[1,2,3,4]

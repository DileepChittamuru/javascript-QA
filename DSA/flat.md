**Flat Nested Array**

Write a custom flat function to flat an array

[1, [2, [3, [4] ] ==> [ 1, 2, 3, 4]


**Explanation**

1. let result = []
Create an empty array to store the flattened values.

2. for (let val of arr)
Loop through each value in the array.

3. if (Array.isArray(val))
Check if the current value is an array:

✅ If yes → recursively call flatten(val)

❌ If no → push the value directly to result

4. result = [...result, ...flatten(val)]
Use the spread operator to append the result of the recursive call.

5. Finally, return the result.

**Code**

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

**Answer**

[1,2,3,4]

**Two Sum**

Given an array and target value, find any two values sum is equal to target and result should be array of those indexs
array = [2,4,6,8] & target = 10 => [0,8]
 
**Explanation**
  
| Index | Value | Complement (`target - value`) | Map Content         | Match?           |
| ----- | ----- | ----------------------------- | ------------------- | ---------------- |
| 0     | 3     | 13                            | {}                  | ❌                |
| 1     | 8     | 8                             | {3: 0}              | ❌                |
| 2     | 12    | 4                             | {3: 0, 8: 1}        | ❌                |
| 3     | 4     | 12                            | {3: 0, 8: 1, 12: 2} | ✅ (12 is in map) |

**Code**

```javascript
const twoSum = (arr, target) => {
  let map = new Map();
  for(let i=0; i<arr.length; i++) {
     const value = arr[i];
     const complement = target - value;
     if(map.has(complement)) {
        return [map.get(complement), i]
     } 
     map.set(value, i)
  }
}

twoSum([2,3,4,6], 8)
```

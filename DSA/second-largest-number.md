**First Largest Number**

1. Find First Large number

```javascript
const FirstLargestNumber = (arr) => {
  let first = arr[0]
  for (let i = 1; i< arr.length; i++) {
    if( num > first ) {
      first = num
    }
   return first;
}
```
**Second Largest Number**

Explanation:
We start with both first and second as -Infinity, the lowest possible number.

As we loop:

If num is greater than first, it becomes the new first, and the old first becomes second.

If num is between first and second, and not equal to first, it becomes the new second.

If all elements are the same or there is no second largest, it returns null.

```javascript
const FirstLargestNumber = (arr) => {
  let first = -Infinity;
  let second = -Infinity;
  for (let i = 1; i< arr.length; i++) {
    if( num > first ) {
      second = first // old first
      first = num // new first
    } else if(num > second && num < first) {
      second = num
   }
  }
  return second === -Infinity ? null : second;
}
```

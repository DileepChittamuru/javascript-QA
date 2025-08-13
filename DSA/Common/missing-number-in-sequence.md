```javascript
function missingNumberInSequence(numbers) {
  let set = new Set(numbers);
  for (i=0; i<=numbers.length; i++) {
    if(!set.has(i) {
      return i
     }
  }
}

console.log(missingNumberInSequence([0,3,2,1]) // 4
```

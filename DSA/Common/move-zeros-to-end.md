***Move Zeros to end of the array***

```javascript

function moveZerosToEnd(arr) {
  let newArray = []
  for(let i=0; i<arr.length; i++) {
    if(arr[i] != 0) {
      newArray.push(arr[i])
    }
  }

  while (newArray.length < arr.length) {
    newArray.push(0)
  }

  return newArray;
}

let arr = [0, 1, 0, 3, 12]

console.log(moveZerosToEnd(arr))
```

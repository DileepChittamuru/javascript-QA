
**Sliding Window**

Given an array and target value and return the max sum of the window

1. First find the sum of first window

2. Slide the window ie from first element to next element

3. iterate the array and remove the previous element

```javascript

const slidingWindow = (arr, k) => {

  let maxSum = 0;

  // Step 1: sum of first window
  for( i=0; i<k; i++) {
    maxSum = maxSum + arr[i]
  }
  let maxWindow = maxSum
  // Step 2 : Slide the window
  for( i=k; i<arr.length; i++) {
    maxWindow = maxWindow + arr[i] - arr[i-k]
    maxSum = Math.max(maxSum, maxWindow)
  }
 return maxSum
}
```

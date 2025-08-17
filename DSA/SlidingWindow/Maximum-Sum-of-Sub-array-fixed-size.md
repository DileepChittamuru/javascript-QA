
**Sliding Window**

Given an array and target value and return the max sum of the window

<img width="1120" height="748" alt="image" src="https://github.com/user-attachments/assets/9a9bf74a-f2aa-4a3d-88ce-fb4c28833890" />


```javascript

const slidingWindow = (arr, k) => {
   // Step 1: Intialise the sum of first window
    let windowSum = 0;
    for (let i=0; i<k; i++) {
      windowSum += arr[i]
    }

   let maxSum = windowSum; // Intialise the maxSum with first window
    // Step 2: Slide the window
    for(let i=k; i<arr.length; i++) {
      windowSum = windowSum + arr[i] - arr[i-k]; // update windowSum
      maxSum = Math.max(maxSum, windowSum); // update maxSum
    }
    return maxSum;
}
```

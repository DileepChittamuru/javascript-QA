const slidingWindow = () => {
  
  function maxSumSubArray(arr, k) {
    // Intialize result 
    let max_sum = 0;
    let window_sum = 0;
    // setup the first window
    for (let i=0; i<k; i++) {
      window_sum += arr[i]
    }
    max_sum = window_sum;
    // slide the window across the maxSubArray
    for (let i=k; i<arr.length; i++) {
      window_sum += arr[i];
      window_sum -= arr[i-k];
      max_sum = Math.max(max_sum, window_sum)
    }
    return max_sum
  }

  function longestUniqueSubstring(str) {
    let left = 0;
    let max_count = 0;
    let set = new Set();
    for (let right=0; right<str.length; right++) {
        if(set.has(str[right])) {
          set.delete(str[left])
          left++;
        }
        set.add(str[right]);
        max_count = Math.max(max_count, right - left + 1)
    }
    return max_count;
  } 
  
}

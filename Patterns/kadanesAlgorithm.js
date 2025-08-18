// Kandanes algorithm O(n)
function maxSubArray(arr) {
  let max_sum = 0;
  let current_sum = 0;
  for ( let val of arr) {
     current_sum = Math.max(val, current_sum + val)
     max_sum = Math.max(max_sum, current_sum)
  }
  return max_sum;
}
console.log(maxSubArray([-1,5,-3,9,-11]))

// Brute force O(n^2)
function maxSubArray2(arr) {
  let max_sum = 0;
  for(let i=0; i<arr.length; i++) {
    let current_sum = 0;
    for(let j=i; j<arr.length; j++) {
        current_sum += arr[j];
        max_sum = Math.max(max_sum, current_sum)
    }
  }
  return max_sum
}
console.log(maxSubArray2([-1,5,-3,9,-11]))

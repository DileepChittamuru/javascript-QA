/**
*  Twopointers 
*
* sliding window is also two pointer technique
*/
function twoPointers() {

  function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
  
    while (left < right) {
      if (str[left] !== str[right]) {
        return false
      } 
      left++;
      right--;
    }
    return true
  }
  // Move Zeros to end
  function moveZeroToEnd(arr) {
    let left = 0;
    for (let right = 0; right < arr.length; right++) {
      if(arr[right] !== 0) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
      }
    }
    return arr;
  }
  console.log(moveZeroToEnd([1,0,2,0,3,0]))

  // Buy and Sell 
  function buyAndSell(arr) {
    let left = 0;
    let profit = 0;
    for(let right=1; right<arr.length;  right++) {
      if (arr[right] > arr[left]) {
        profit = Math.max(profit, arr[right] - arr[left])
      } else {
        left = right;
      }
    }
    return profit;
  }
}

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
}


function twoPointers() {
  // Move zero's to end
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

function hashMap() {
   // two sum brute fore
  function twoSum(arr, k) {
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
          if(arr[i]+arr[j] === k) {
            return [i, j]
          }
        }
    }
    return null;
  }
  // two sum two pointers
  function twoSum(arr, k) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let complement = k - arr[i];
        if (map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(arr[i], i)
    }
    return null;
  }
}

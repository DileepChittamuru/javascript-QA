Given an array [] and each index will be day,

Example let prices = [7, 1, 5,4, 6, 4] 

Buy at 1 , sell at 6 So profit will be 5

Greedy Method

```javascript
const buySell = () => {
    let arr = [7, 1, 5,4,6,4];
    let gp = 0
    for(let i=0; i<arr.length-1; i++) {
        for (let j=i+1; j<arr.length; j++) {
            let cp = arr[j] - arr[i];
            if(cp > gp) {
                gp = cp
            }
        }
    }
    return gp;
}
```
Buy & Sell Optimised Approach

```javascript
const BS = () => {
  let prices = [7, 1, 5,4, 6, 4]
  let minPrice = Infinity
  let maxProfit = 0
  for (let price of prices) {
      if(price < minPrice) {
          minPrice = price
       } else  {
          maxProfit = Math.max(maxProfit, price - minPrice);
       }
  }
  return maxProfit
}
```

function validParanthesis(str) {
    let obj = {
    ')' : '(',
    '}' : '{',
    ']' : '['
  }
  let stack = []
  for (let val of str) {
    if (val in obj) {
      const ele = stack.length ? stack.pop(): '#'
      if(ele !== obj[val]) {
        return false
      }
    } else {
      stack.push(val)
    }
  }
  return stack.length === 0;
}

console.log(validParanthesis('([{}])'))

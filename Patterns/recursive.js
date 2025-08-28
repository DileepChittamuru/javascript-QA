function recursive() {
   let obj = {
      name: 'Dileep',
      age: 35,
      address: {
        state: 'TG',
        city: {
          cityName: 'hyderabad',
          pincode: {
            code: '524101'
          }
        }
      }
    }

    function recursiveObj(obj) {
      for (let key in obj) {
        if (typeof obj[key] === 'object') {
          console.log(key)
          recursiveObj(obj[key])
        } else {
          console.log(key, obj[key])
        }
      }
    }
    recursiveObj(obj)
}

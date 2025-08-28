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
   // deep clone
   function deepClone(value) {
        if (value === null || typeof value !== 'object') {
          return value;
        }
        if (Array.isArray(value)) {
          return value.map(item => deepClone(item))
        }
        if (typeof value === 'object') {
          let newObj = {};
          for (let key in value) {
            newObj[key] = deepClone(value[key])
          }
          return newObj;
        }
      }
      
      const obj = {
        a: 1,
        b: 2,
        c: {
          d: 3,
          e: 4,
        },
        f: [5, 6],
      };

      console.log(deepClone(obj))
}

```javascript

const api = () => new Promise(resolve => setTimeout(() => {console.log('api called')} , 2000))

const debounce = function(callback, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => callback.apply(this, args), delay);
    }
}

const debounceApi = debounce(api, 2000);

console.log(`debounce`, debounceApi());
console.log(`debounce`, debounceApi());
console.log(`debounce`, debounceApi());
console.log(`debounce`, debounceApi());
console.log(`debounce`, debounceApi());
```

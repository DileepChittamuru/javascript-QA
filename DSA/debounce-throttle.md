```javascript

//const api = (type = "empty") => new Promise(resolve => setTimeout(() => {console.log('api called', type)} , 2000))
const api = (type) => new Promise(resolve =>
    setTimeout(() => {
        console.log('api called with:', type);
        resolve();
    }, 2000)
);
const debounce = function(func, delay) {
    let timer;
    return function(...args) {
        console.log(`args`, args)
        clearTimeout(timer)
        timer = setTimeout(() => func.apply(this, args), delay);
    }
}

const throttle = function(func, delay) {
    let run;
    return function(...args) {
        if(!run) {
            func.apply(this, args);
            run = true;
            timer = setTimeout(() => { run = false }, delay);
            clearTimeout(timer)
        }
    }
}

const debounceApi = debounce(api, 2000);

console.log(debounceApi('debounce-1'));
console.log(debounceApi('debounce-2'));
console.log(debounceApi('debounce-3'));
console.log(debounceApi('debounce-4'));
console.log(debounceApi('debounce-5'));

const throttleApi = throttle(api, 2000);

console.log(throttleApi('throttle-1'));
console.log(throttleApi('throttle-2'));
console.log(throttleApi('throttle-3'));
console.log(throttleApi('throttle-4'));
console.log(throttleApi('throttle-5'));

```

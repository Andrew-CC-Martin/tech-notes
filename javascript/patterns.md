## Memoisation

### Memoise a single-arg function

```js
const memoise =
  (func, cache = {}) =>
  (arg) => {
    if (!cache[arg]) {
      cache[arg] = func(arg);
    }
    return cache[arg];
  };
```

### Generic memoisation function

```js
function memoize(fn) {
  var cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    cache[args] = fn.apply(this, args);
    return cache[args];
  };
}
```

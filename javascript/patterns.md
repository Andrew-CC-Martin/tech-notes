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
const memoize =
  (func, cache = {}) =>
  (...args) => {
    if (!cache[args]) {
      cache[args] = func(...args);
    }

    return cache[args];
  };
```

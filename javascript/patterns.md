## Memoisation

### Memoise a single-arg function

```js
const memoise =
  (func, cache = {}) =>
  (arg) => {
    if (!cache[arg]) {
      cache[arg] = func(arg)
    }
    return cache[arg]
  }

// single-line version
const memoise = (fn, cache = {}) => arg => arg in cache ? cache[arg] : cache[arg] = fn(n)
```

### Generic memoisation function

```js
const memoize =
  (func, cache = {}) =>
  (...args) => {
    if (!cache[args]) {
      cache[args] = func(...args)
    }

    return cache[args]
  }
```

## Getter

The `get` syntax binds an object property to a function that _will be called when the property is accessed_

```javascript
const monkey = "banana";

const obj = {
  get stuff() {
    return monkey;
  },
};

obj.monkey; //=> returns "banana"
```

This can be useful if you need to set up an object's property before the data for that property is ready.

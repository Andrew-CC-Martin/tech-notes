### Stop re-directs and re-loads

- useful eg when you want to maintain network tab responses, and state in general

```js
window.addEventListener("beforeunload", function() { debugger; }, false)
```

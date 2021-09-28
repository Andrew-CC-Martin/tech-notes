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

# Linked List

## Singly-linked list

You can create a singly-linked list using this very simple function

```js
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Then create like this
// Eg this will create a list 5 -> 4 -> 3 -> 2 -> 1 ->
let list = null;
for (let i = 1; i < 6; i++) {
  list = new ListNode(i, list);
}
```

## Doubly-linked list

You can create a doubly-linked list using the same function

```js
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Then create like this
// Eg this will create a list <- 5 <-> 4 <-> 3 ->
let list = null;
let temp = null;
for (let i = 3; i < 6; i++) {
  temp = list;
  list = new ListNode(i, list);
  //list = new ListNode(i, list, prev)
  if (temp) {
    temp.prev = list;
  }
}
```

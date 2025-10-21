# 🔹 Arrow Function, Map & Filter in JavaScript

This repo contains simple examples showing how to use **arrow functions**, **map()**, and **filter()** in JavaScript.

---

## 📘 Example

```js
Arrow Function
const add = (a, b) => a + b;
console.log("Add:", add(2, 3)); // Output: 5

map() example
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled); // Output: [2, 4, 6, 8]

filter() example
const even = numbers.filter(num => num % 2 === 0);
console.log("Even:", even); // Output: [2, 4]

map() + filter() together
const result = numbers
  .filter(num => num % 2 !== 0)
  .map(num => num * num);
console.log("Squares of odd numbers:", result); // Output: [1, 9]

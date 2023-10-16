# javascript-conditionals-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- In JavaScript, when is scope determined?
  During a function’s declaration

- What allows JavaScript functions to "remember" variables from their surroundings?
  JavaScript closures

- What values does a closure contain?
  It contains a collection of all the variables in scope at the time of creation of the function
  The values of variables from its surrounding lexical scope

- When is a closure created?
  When a function is defined

- How can you tell if a function will be created with a closure?
  If a function is defined inside another function and the inside function references variables from the outer function

- In React, what is one important case where you need to know if a closure was created?
  When using the useEffect hook. You need to know if a closure was created to help you manage dependencies and avoid stale closures

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```

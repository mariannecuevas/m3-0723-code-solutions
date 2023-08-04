# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
After the component's initial render

- What is a React Effect?
Function that performs side effects in components

- When should you use an Effect and when should you not use an Effect?
Use an Effect when synchronizing with an external system (APIs, network, etc)
You might not need an Effect if it only adjusts some state based on another state

- When do Effects run?
After the component rendered and the changes are committed to the DOM
- What function is used to declare an Effect?
useEffect

- What are Effect dependencies and how do you declare them?
Array of values that your Effect depends on to decide what to do
  Values that should trigger the effect to run again when changed
Declare them in an array as the second argument of the UseEffect call

- Why would you want to clean up from an Effect?
To make sure any connections are disconnected when the component unmounts
Prevent memory leaks

- How do you clean up from an Effect?
Return a function from the effect

- When does the cleanup function run?
Before the next Effect runs and when the component unmounts


## Notes

All student notes should be written here.


How to write `Code Examples` in markdown

for JS:
```javascript
const data = "Howdy"
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
  width:100%
}
```

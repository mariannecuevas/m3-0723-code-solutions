# react-rendering-lists-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When would we want to dynamically create a list of React components?
  When you need to show several instances of the same component using different data

- Why is it important for React components to be data-driven?
  Helps create reusable and flexible UI components that can adapt to different datasets

- Where in the component code would a list of React components typically be built?
  Before the return statement in the component’s code

- What `Array` method is commonly used to create a list of React components?
  Map() method

- Why do components in a list need to have unique keys?
  Keys tell React which array item each component corresponds to
  Helps React infer what exactly has happened and make the correct updates to the DOM tree

- What is the best value to use as a "key" prop when rendering lists?
  ID

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

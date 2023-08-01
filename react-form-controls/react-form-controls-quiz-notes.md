# react-form-controls-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- How do controlled components differ from uncontrolled components?
  -Controlled
  -Value is controlled/managed by React state and changes are managed through state updates
  -Takes its current value through props and changes through callbacks
  -Uncontrolled
  -Values are managed by the DOM
  -Direct access to values is possible using DOM manipulation

- What are some advantages of using uncontrolled components?
  -Simplicity (less code and configuration)
  -Useful for simple forms
  -Useful when you want to integrate non React code or libraries

- What are some advantages of using controlled components?
  -Useful for more complex forms
  -More control; easiest to manage and validate user input
  -Easy validation of user input before updating the state

- Which style do you prefer?
  -I prefer uncontrolled because of how simple it is

- What two props must you pass to an input for it to be "controlled"?
  -checked and value
  -Must also pass an onChange handler that updates the passed value

- What are some popular npm packages for creating forms in React?
  -React Hook Form, Formik, and React Final Form

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

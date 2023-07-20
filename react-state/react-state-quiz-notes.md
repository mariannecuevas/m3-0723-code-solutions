# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  Special functions that are only available while React is rendering
  Let you “hook into” different React features

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  Can only be called at the top level of your components or your own Hooks
  Can’t call Hooks inside conditions, loops, or other nested functions
  Similar to how you “import” modules at the top of your file.

- What is the purpose of state in React?
  To store data for the component to remember between renders

- Why can't we just maintain state in a local variable?
  Local variables don’t persist between renders
  Changes to local variables wont trigger renders

- What two actions happen when you call a `state setter` function?
  The state value is updated and then React is triggered to render the component again

- When does the local `state variable` get updated with the new value?
  It gets updated after you call the state setter function

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

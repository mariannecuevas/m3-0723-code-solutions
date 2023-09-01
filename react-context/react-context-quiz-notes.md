# react-context-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the purpose of React "context"?
Context lets the parent component share information with any component in its child tree without passing it through props
- What values can be stored in context?
Any kind of value including an object
- How do you create context and make it available to the components?
Create context with useCreate()
Wrap the components with a context provider and value
  <!-- <ContextProvider value={data}> -->
- How do you access the context values?
Use the useContext hook, passing in the context you created
- When would you use context? (in addition to the best answer: "rarely")
Use context when other methods, such as passing props or extracting components and passing jsx as children, are not ideal or efficient


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

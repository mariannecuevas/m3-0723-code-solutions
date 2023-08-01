function MyForm() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formValues = Object.fromEntries(formData.entries());
    console.log('Form values: ', formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username <input type="text" name="username" />
      </label>
      <label>
        Password <input type="password" name="password" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default MyForm;

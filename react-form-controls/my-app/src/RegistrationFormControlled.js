import { useState } from 'react';

function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log('state:', { username, password });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Form;

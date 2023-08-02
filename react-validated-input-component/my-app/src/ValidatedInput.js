import { useState } from 'react';

function ValidatedInput() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('A password is required.');

  const handleChange = (e) => {
    setPassword(e.target.value);

    const errorMessage = !e.target.value
      ? 'A password is required.'
      : e.target.value.length < 8
      ? 'Your password is too short.'
      : '';
    setError(errorMessage);
  };

  return (
    <form>
      <div>
        <label>Password</label>
      </div>
      <div>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        {error ? (
          <i class="fa-solid fa-xmark fa-xl"></i>
        ) : (
          <i class="fa-solid fa-check fa-xl"></i>
        )}
      </div>
      <div>
        <div className="error">{error}</div>
      </div>
    </form>
  );
}

export default ValidatedInput;

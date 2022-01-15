import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
  const loginFields = {
    username: '',
    password: '',
  };
  const [loginCreds, setLoginCreds] = useState(loginFields);

  const { username, password } = loginCreds;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setLoginCreds({ ...loginCreds, [name]: value });
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title"> JS Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="input"
            type="text"
            name="username"
            placeholder="username"
            value={username}
            onChange={handleChange}
            required
          />
          <input
            className="input"
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handleChange}
            required
          />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;

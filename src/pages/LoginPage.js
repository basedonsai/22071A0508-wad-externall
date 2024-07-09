import React from 'react';
import './LoginPage.css';

const LoginPage = () => (
  <div className="login-container">
    <h1>Login</h1>
    <form className="login-form">
      <div className="form-group">
        <label>Username:</label>
        <input type="text" name="username" />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
);

export default LoginPage;

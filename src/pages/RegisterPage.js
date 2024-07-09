import React from 'react';
import './RegisterPage.css';

const RegisterPage = () => (
  <div className="register-container">
    <h1>Register</h1>
    <form className="register-form">
      <div className="form-group">
        <label>First Name:</label>
        <input type="text" name="firstName" />
      </div>
      <div className="form-group">
        <label>Last Name:</label>
        <input type="text" name="lastName" />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input type="email" name="email" />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" name="password" />
      </div>
      <div className="form-group">
        <label>Confirm Password:</label>
        <input type="password" name="confirmPassword" />
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <select name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Date of Birth:</label>
        <input type="date" name="dob" />
      </div>
      <div className="form-group">
        <label>Phone Number:</label>
        <input type="tel" name="phoneNumber" />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input type="text" name="address" />
      </div>
      <div className="form-group">
        <label>City:</label>
        <input type="text" name="city" />
      </div>
      <div className="form-group">
        <label>State:</label>
        <input type="text" name="state" />
      </div>
      <div className="form-group">
        <label>Zip Code:</label>
        <input type="text" name="zipCode" />
      </div>
      <div className="form-group">
        <label>Country:</label>
        <input type="text" name="country" />
      </div>
      <div className="form-group">
        <label>Profile Picture URL:</label>
        <input type="url" name="profilePicture" />
      </div>

      <button type="submit">Register</button>
    </form>
  </div>
);

export default RegisterPage;

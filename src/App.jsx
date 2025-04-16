import React, { useState } from 'react';
import './App.css';

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      skill: form.skill.value.trim(),
      portfolio: form.portfolio.value.trim(),
    };

    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      {submitted ? (
        <div className="success-message">
          <h3>Form submitted successfully!</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Sign Up Form</h2>
          <p>Fill out the form below to get started</p>

          <div className="formGroup">
            <label>Full Name</label>
            <input type="text" name="name" id="name" required />
          </div>

          <div className="formGroup">
            <label>Email Address</label>
            <input type="email" name="email" id="email" required />
          </div>

          <div className="formGroup">
            <label>Skill Category</label>
            <input type="text" name="skill" id="skill" required />
          </div>

          <div className="formGroup">
            <label>Portfolio Link</label>
            <input type="url" name="portfolio" id="portfolio" required />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      )}
    </div>
  );
}

export default App;

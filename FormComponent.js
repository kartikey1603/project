import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({ name: '', interests: '', city: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log(data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <input type="text" name="interests" placeholder="Interests" onChange={handleChange} />
      <input type="text" name="city" placeholder="City" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';

const ContactForm = () => {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate.push('/schedule');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Contact Information</h2>
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Contact"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
      />
      <button type="submit" className="btn-blue">Next</button>
    </form>
  );
};

export default ContactForm;

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';

const Review = () => {
  const { formData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Submit the form data to a server or perform any desired action
    console.log('Form submitted', formData);
    // Example of navigating to another route after form submission
    navigate.push('/');
  };

  return (
    <div className="form-container">
      <h2>Review Your Information</h2>
      <p>Organization Name: {formData.organizationName}</p>
      <p>Email: {formData.email}</p>
      <p>Contact: {formData.contact}</p>
      <p>Slot Date: {formData.slotDate}</p>
      <p>Slot Time: {formData.slotTime}</p>
      <p>Topic/Subject: {formData.topic}</p>
      <p>Payment Method: {formData.paymentMethod}</p>
      <button onClick={handleSubmit} className="btn-blue">Submit</button>
    </div>
  );
};

export default Review;

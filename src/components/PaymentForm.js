import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';

const PaymentForm = () => {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, paymentMethod: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/review');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Payment Method</h2>
      <input
        type="text"
        placeholder="Payment Method"
        value={formData.paymentMethod}
        onChange={handleChange}
      />
      <button type="submit" className="btn-blue">Next</button>
    </form>
  );
};

export default PaymentForm;

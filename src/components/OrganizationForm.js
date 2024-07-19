import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';

const OrganizationForm = () => {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, organizationName: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/contact');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Organization Information</h2>
      <input
        type="text"
        placeholder="Organization Name"
        value={formData.organizationName}
        onChange={handleChange}
      />
      <button type="submit" className="btn-blue">Next</button>
    </form>
  );
};

export default OrganizationForm;

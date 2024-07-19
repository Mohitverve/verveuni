import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';

const ScheduleForm = () => {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate.push('/topic');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Schedule</h2>
      <input
        type="date"
        name="slotDate"
        value={formData.slotDate}
        onChange={handleChange}
      />
      <input
        type="time"
        name="slotTime"
        value={formData.slotTime}
        onChange={handleChange}
      />
      <button type="submit" className="btn-blue">Next</button>
    </form>
  );
};

export default ScheduleForm;

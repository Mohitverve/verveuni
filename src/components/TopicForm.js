import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from './FormContext';

const TopicForm = () => {
  const { formData, setFormData } = useContext(FormContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, topic: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/payment');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Topic/Subject</h2>
      <input
        type="text"
        placeholder="Topic/Subject"
        value={formData.topic}
        onChange={handleChange}
      />
      <button type="submit" className="btn-blue">Next</button>
    </form>
  );
};

export default TopicForm;

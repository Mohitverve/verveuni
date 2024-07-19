import React, { useState } from 'react';
import '../styles/Book.css';
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';
const Book = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    email: '',
    contact: '',
    slotDate: '',
    slotTime: '',
    topic: '',
    paymentMethod: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <Marquee />
       <Navbar />

       
    <div className="form-container">
      <div className="pricing-options">
        <div className="pricing-card">
          <h3>Per Session</h3>
          <p>₹3,500</p>
          <p>Book individual sessions</p>
        </div>
        <div className="pricing-card">
          <h3>Half Yearly Subscription</h3>
          <p>₹31,000</p>
          <p>10 sessions in the duration</p>
        </div>
        <div className="pricing-card">
          <h3>Yearly Subscription</h3>
          <p>₹61,000</p>
          <p>20 sessions per year</p>
        </div>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="organizationName">Organization Name:</label>
          <input
            type="text"
            id="organizationName"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="slotDate">Slot Date:</label>
          <input
            type="date"
            id="slotDate"
            name="slotDate"
            value={formData.slotDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="slotTime">Slot Time:</label>
          <input
            type="time"
            id="slotTime"
            name="slotTime"
            value={formData.slotTime}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="topic">Topic/Subject:</label>
          <select
            id="topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          >
            <option value="">Select Topic/Subject</option>
            <option value="topic1">Topic 1</option>
            <option value="topic2">Topic 2</option>
            <option value="topic3">Topic 3</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit" className='btnsub'>Book Slot</button>
      </form>
    </div>
    <Footer/>
    </div>
    
   
  );
};

export default Book;

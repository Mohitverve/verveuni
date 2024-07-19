// src/components/AdditionalInfo.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from './firebase';
import { doc, updateDoc } from 'firebase/firestore';
import '../styles/info.css';

export default function Info() {
  const [name, setName] = useState('');
 
  const [interestLevel, setInterestLevel] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      try {
        await updateDoc(doc(db, 'users', user.uid), {
          name,
          
          interestLevel,
        });
       
        navigate('/Home');
      } catch (error) {
        console.error('Error updating user document:', error);
      }
    }
  };

  return (
    <div className="additional-info-page">
      <h1>Are you interested in learning with VR?</h1>
      <form onSubmit={handleSubmit} className="additional-info-form">
        
        <label>
          <h1>Tell us about it</h1>
          <input
            type="text"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
       
        <label>
        
          <select
         
            value={interestLevel}
           
            onChange={(e) => setInterestLevel(e.target.value)}
            required
          >
            <option value="">Select...</option>
            <option value="Low">Low</option>
            <option value="Good enough">Good enough</option>
            <option value="Very High">Very High</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

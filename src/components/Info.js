import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from './firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import '../styles/info.css';

export default function Info() {
  const [name, setName] = useState('');
  const [interestLevel, setInterestLevel] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const checkUserInfo = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists() && userDoc.data().additionalInfoCompleted) {
            navigate('/Home');
          } else {
            setLoading(false); // Set loading to false if user info is not complete
          }
        } catch (error) {
          console.error('Error fetching user document:', error);
          setLoading(false); // Set loading to false in case of error
        }
      } else {
        setLoading(false); // Set loading to false if no user is signed in
      }
    };

    checkUserInfo();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      try {
        await updateDoc(doc(db, 'users', user.uid), {
          name,
          interestLevel,
          additionalInfoCompleted: true,
        });

        navigate('/Home');
      } catch (error) {
        console.error('Error updating user document:', error);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Render a loading message while checking user info
  }

  return (
    <div className="additional-info-page">
      <h1>Are you interested in learning with VR?</h1>
      <form onSubmit={handleSubmit} className="additional-info-form">
        <label>
          <h1>Tell us about it</h1>
          <input
            type="text"
            placeholder="Name"
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

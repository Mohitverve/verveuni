import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from './firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import '../styles/info.css';

export default function Info() {
  const [name, setName] = useState('');
  const [interestLevel, setInterestLevel] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserInfo = async () => {
      const user = auth.currentUser;
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists() && userDoc.data().additionalInfoCompleted) {
            navigate('/Home');
          } else {
            setLoading(false);
          }
        } catch (error) {
          console.error('Error fetching user document:', error);
          setLoading(false);
        }
      } else {
        setLoading(false);
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
    return <div>Loading...</div>;
  }

  return (
    <div className="additional-info-page">
      <h1>Are you interested in learning with VR?</h1>
      <form onSubmit={handleSubmit} className="additional-info-form">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          fullWidth
          margin="normal"
          InputProps={{
            style: { color: 'white' },
          }}
          InputLabelProps={{
            style: { color: 'white' },
          }}
        />
        <FormControl
          variant="outlined"
          fullWidth
          margin="normal"
          required
          sx={{
            '& .MuiOutlinedInput-root': {
              color: 'white',
            },
            '& .MuiInputLabel-root': {
              color: 'white',
            },
          }}
        >
          <InputLabel id="interest-label">Interest Level</InputLabel>
          <Select
            labelId="interest-label"
            id="interest-level"
            value={interestLevel}
            onChange={(e) => setInterestLevel(e.target.value)}
            label="Interest Level"
            sx={{ color: 'white' }}
          >
            <MenuItem value="">
              <em>Select...</em>
            </MenuItem>
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Good enough">Good enough</MenuItem>
            <MenuItem value="Very High">Very High</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
}

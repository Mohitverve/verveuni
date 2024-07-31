// src/pages/Book.js
import React, { useState } from 'react';
import { Typography, Container, Grid } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Price from '../components/Price';
import Marquee from '../components/Marquee'

const Book = () => {
  const [totalPrice, setTotalPrice] = useState(null);

  const plans = [
    {
      title: 'Govt School',
      price: 70,
      features: ['VR Headsets', 'Content Library', 'Mobile Devices'],
    },
    {
      title: 'Private School',
      price: 100,
      features: ['VR Headsets', 'Content Library', 'Mobile Devices'],
    },
    {
      title: 'Colleges',
      price: 150,
      features: ['VR Headsets', 'Content Library', 'Mobile Devices'],
    },
  ];

  const handleCalculate = (price) => {
    const students = prompt("Enter the number of students:");
    if (students && !isNaN(students)) {
      setTotalPrice(price * Number(students));
    } else {
      alert("Please enter a valid number of students.");
    }
  };

  return (
    <>
    <Marquee />
      <Navbar />
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Typography variant="h2" align="center" gutterBottom>
          Pricing Plans
        </Typography>
        <Typography variant="h5" align="center" paragraph>
          Choose the Right Plan for Your Institution
        </Typography>
        <Typography variant="body1" align="center" paragraph sx={{ mb: 4 }}>
          Our pricing plans are designed to cater to different types of educational institutions. 
          Each plan includes access to VR headsets, an extensive content library, and mobile devices 
          to enhance the learning experience.
        </Typography>
        <Grid container spacing={4}>
          {plans.map((plan, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Price
                title={plan.title}
                features={plan.features}
                buttonText="CALCULATE"
                onCalculate={() => handleCalculate(plan.price)}
              />
            </Grid>
          ))}
        </Grid>
        {totalPrice !== null && (
          <Typography variant="h5" align="center" sx={{ mt: 4 }}>
            Total Price: ₹{totalPrice}
          </Typography>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Book;
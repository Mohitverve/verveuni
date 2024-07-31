// src/App.js
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Plans from '../components/Plans';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Georgia, "Times New Roman", Times, serif',
  },
});

const plans = [
  {
    title: 'Monthly Plan',
    description: 'Perfect for individuals or small teams looking to explore VR content.',
    price: '₹500/month',
    features: ['Access to basic VR content', 'Monthly content updates', 'Email support'],
  },
  {
    title: 'Half-Yearly Plan',
    description: 'Ideal for growing businesses with regular VR content needs.',
    price: '₹3,000/6 months',
    features: ['All Monthly Plan features', 'Priority content access', 'Phone support'],
  },
  {
    title: 'Yearly Plan',
    description: 'Best value for enterprises and large teams committed to VR innovation.',
    price: '₹6,000/year',
    features: ['All Half-Yearly Plan features', 'Custom content requests', '24/7 premium support'],
  },
];

const Content = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Marquee />
        <Navbar />
        <Box my={8}>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Our Subscription Plans
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom align="center" color="textSecondary">
            Choose the perfect plan for your VR content needs
          </Typography>
          <Grid container spacing={4} justifyContent="center" mt={4}>
            {plans.map((plan, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Plans
                  title={plan.title}
                  description={plan.description}
                  price={plan.price}
                  features={plan.features}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Content;
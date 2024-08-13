import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Price from '../components/Price';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';
import Hero from '../components/Hero';
import About from '../components/About';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';

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
    title: 'Govt school',
    description: 'For govt schools',
    price: '₹70/per student',
    features: ['VR headsets', 'Mobile devices', 'High quality content library'],
  },
  {
    title: 'Private school',
    description: 'For Private schools',
    price: '₹100/per student',
    features: ['VR headsets', 'Mobile devices', 'High quality content library'],
    },
  {
    title: 'Colleges ',
    description: 'For Colleges and private institutions',
    price: '₹150/per student',
    features: ['VR headsets', 'Mobile devices', 'High quality content library'],
  },
];

const Book = () => {
  const location = useLocation();  // Add this line
  const pathSegments = location.pathname.split('/').filter(segment => segment);
  const breadcrumbItems = [
      { title: <Link to="/">Home</Link> },
      ...pathSegments.map((segment, index) => {
          const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
          return {
              title: index === pathSegments.length - 1 
                  ? segment.charAt(0).toUpperCase() + segment.slice(1)
                  : <Link to={url}>{segment.charAt(0).toUpperCase() + segment.slice(1)}</Link>
          };
      })
  ];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
<Marquee />
<div className='bread'>
<Breadcrumb items={breadcrumbItems} />
</div>
<Hero/>
      <Container maxWidth="lg">
      
       <About />

        <Box my={8}>
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Our Session Plans
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom align="center" color="textSecondary">
            Choose according to your organisation
          </Typography>
          <Grid container spacing={4} justifyContent="center" mt={4}>
            {plans.map((plan, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Price
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

export default Book;

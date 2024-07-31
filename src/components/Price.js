// src/components/Price.js
import React from 'react';
import { Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { styled } from '@mui/system';
import VrpanoIcon from '@mui/icons-material/Vrpano';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.primary,
  background: 'white',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  borderRadius: '12px',
  fontFamily: 'Georgia, serif', // Set the font family to Georgia
  transition: 'transform 0.2s, box-shadow 0.2s', // Add transition for smoothness
  '&:hover': {
    transform: 'translateY(-5px)', // Slightly lift the paper on hover
    boxShadow: '0px 8px 30px rgba(0, 0, 0, 0.2)', // Increase shadow on hover
  },
}));

const FeatureList = styled(List)({
  padding: 0,
  margin: '20px 0',
  textAlign: 'left',
  fontFamily: 'Georgia, serif', // Set the font family to Georgia
});

const FeatureItem = styled(ListItem)(({ theme }) => ({
  transition: 'background 0.2s, color 0.2s', // Add transition for smoothness
  '&:hover': {
    background: theme.palette.action.hover, // Background color on hover
    color: theme.palette.primary.main, // Text color on hover
  },
}));

const CalcButton = styled(Button)(({ theme }) => ({
  marginTop: 'auto',
  background: '#000000',
  color: 'white',
  '&:hover': {
    background: '#333333', // Darker background on hover
  },
  fontFamily: 'Georgia, serif', // Set the font family to Georgia
}));

const Price = ({ title, features, buttonText, onCalculate }) => {
  const getIcon = (feature) => {
    switch (feature.toLowerCase()) {
      case 'vr headsets':
        return <VrpanoIcon />;
      case 'content library':
        return <MenuBookIcon />;
      case 'mobile devices':
        return <PhoneAndroidIcon />;
      default:
        return null;
    }
  };

  return (
    <StyledPaper elevation={0}>
      <Typography variant="h4" component="h3" gutterBottom style={{ fontFamily: 'Georgia, serif' }}>
        {title}
      </Typography>
      <FeatureList>
        {features.map((feature, idx) => (
          <FeatureItem key={idx} dense>
            <ListItemIcon>
              {getIcon(feature)}
            </ListItemIcon>
            <ListItemText primary={feature} />
          </FeatureItem>
        ))}
      </FeatureList>
      <CalcButton 
        variant="contained" 
        onClick={onCalculate}
        fullWidth
      >
        {buttonText}
      </CalcButton>
    </StyledPaper>
  );
};

export default Price;

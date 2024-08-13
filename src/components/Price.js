import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: theme.shadows[10],
  },
}));

const Price = ({ title, description, price, features }) => {
  const [students, setStudents] = useState(0);
  const [totalPrice, setTotalPrice] = useState(null);

  const handleCalculate = () => {
    const pricePerStudent = parseFloat(price.replace(/[^\d]/g, ''));
    setTotalPrice(pricePerStudent * students);
  };

  return (
    <StyledCard>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          {price}
        </Typography>
        <Typography variant="body1" paragraph>
          {description}
        </Typography>
        <List>
          {features.map((feature, index) => (
            <ListItem key={index} disablePadding>
              <ListItemIcon>
                <CheckCircleOutlineIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions>
        <TextField
          label="Number of Students"
          type="number"
          value={students}
          onChange={(e) => setStudents(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button fullWidth variant="contained" color="primary" onClick={handleCalculate}>
          Calculate
        </Button>
      </CardActions>
      {totalPrice !== null && (
        <Box p={2}>
          <Typography variant="h6" color="text.secondary">
            Total Price: ₹{totalPrice}
          </Typography>
        </Box>
      )}
    </StyledCard>
  );
};

export default Price;

import React, { useState, useEffect } from 'react';
import { Dropdown, Space, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Skeleton from '@mui/material/Skeleton';
import '../styles/navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [isLoading, setIsLoading] = useState(true); // State to manage loading

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const logout = () => {
    signOut(auth)
      .then(() => {
        window.location.href = '/Register';
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setTimeout(() => {  // Add this timeout
        if (user) {
          setIsAuthenticated(true);
          setDisplayName(user.displayName || 'User');
        } else {
          setIsAuthenticated(false);
          setDisplayName('');
        }
        setIsLoading(false); // Data is loaded
      },);  // 2-second delay to simulate loading
    });
  
    return () => unsubscribe();
  }, []);
  

  const items = [
    {
      key: '1',
      label: `Hello, ${displayName}`,
    },
    {
      key: '4',
      danger: true,
      label: 'Logout',
      onClick: logout,
    },
  ];

  return (
    <div className="navbar">
      <div className="hamburger" onClick={toggleNav}>
        <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
      </div>
      <a className="logo"></a>
      <div className="nav-logo">
        <a href="#/logo">
          <img loading="lazy" src="/images/vervein.png" alt="vervein" />
        </a>
      </div>
      <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <i className="uil uil-times navCloseBtn" onClick={toggleNav}></i>
        
        <ul>
          <li><Link to="/Home">Home</Link></li>
          <li><Link to="/Content">Subscribe</Link></li>
          <li><Link to="/Book">Book</Link></li>
          <li><Link to="/Partners">Delivery Partner</Link></li>
        </ul>
      </div>
      {isLoading ? (
        <Skeleton variant="circular" width={40} height={40} />
      ) : (
        isAuthenticated && (
          <Dropdown menu={{ items }}>
            <a>
              <Space>
                <Avatar
                  style={{ backgroundColor: '#808080', verticalAlign: 'middle' }}
                  icon={<UserOutlined />}
                  size="Large"
                />
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        )
      )}
    </div>
  );
};

export default Navbar;

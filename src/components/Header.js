import React, { useState, useEffect } from 'react';
import { Dropdown, Space, Avatar, Badge } from 'antd';
import { Link } from 'react-router-dom';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import '../styles/header.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [displayName, setDisplayName] = useState('');

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
      if (user) {
        setIsAuthenticated(true);
        setDisplayName(user.displayName || 'User'); // Set display name or a default value
      } else {
        setIsAuthenticated(false);
        setDisplayName('');
      }
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
    <div className="Header">
      <div className="hamburger" onClick={toggleNav}>
        <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isNavOpen ? 'open' : ''}`}></div>
      </div>
      <a className="logo">VerveIN</a>
      <div className="nav-logo">
        <a href="#/logo">
          <img loading="lazy" src="/images/vervein.png" alt="vervein" />
        </a>
      </div>
      <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <i className="uil uil-times navCloseBtn" onClick={toggleNav}></i>
        <ul>
          <li><Link to="#about-us">About</Link></li>
          <li><Link to="#portfolio-loc">Services</Link></li>
          <li><Link to="/Book">Book Sessions</Link></li>
          <li><Link to="#FAQ">FAQs</Link></li>
          <li><Link to="#contact">Contact us</Link></li>
        </ul>
      </div>
      {isAuthenticated && (
        <Dropdown menu={{ items }}>
          <a>
            <Space>
              
                <Avatar
                  style={{ backgroundColor: '#808080', verticalAlign: 'middle' }}
                  icon={<UserOutlined />}
                  size="Small"
                >
                  {displayName ? displayName[0].toUpperCase() : <UserOutlined />}
                </Avatar>
              
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      )}
    </div>
  );
};

export default Header;

import { Form, Input, Button, Select } from 'antd';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from './firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

const { Option } = Select;

const Info = ({ user }) => {
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

  const handleSubmit = async (values) => {
    const user = auth.currentUser;
    if (user) {
      try {
        await updateDoc(doc(db, 'users', user.uid), {
          name: values.name,
          interestLevel: values.interestLevel,
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
    <div style={styles.container}>
      <h2 style={styles.heading}>Are you interested in learning with VR?</h2>
      <Form
        name="vr_interest"
        onFinish={handleSubmit}  // Changed from onFinish to handleSubmit
        style={styles.form}
        layout="vertical"
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter your name!' }]}
        >
          <Input placeholder="Name" style={styles.input} onChange={(e) => setName(e.target.value)} />
        </Form.Item>

        <Form.Item
          name="interestLevel"
          label="Interest Level"
          rules={[{ required: true, message: 'Please select your interest level!' }]}
        >
          <Select placeholder="Select your interest level" style={styles.input} onChange={(value) => setInterestLevel(value)}>
            <Option value="high">High</Option>
            <Option value="medium">Medium</Option>
            <Option value="low">Low</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={styles.button}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: 'url("/images/bgv.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
    fontFamily: 'Georgia, serif',
  
  },
  form: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
    width: '300px',
  },
  input: {
    borderRadius: '8px',
    backgroundColor: '#e6f7ff',
    borderColor: '#1890ff',
    fontFamily: 'Georgia, serif',
  },
  button: {
    width: '100%',
    backgroundColor: '#1890ff',
    borderColor: '#1890ff',
    borderRadius: '8px',
  },
};

export default Info;

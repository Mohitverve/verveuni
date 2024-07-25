import React, { useState } from 'react';
import '../styles/Book.css';
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';

import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from 'antd';
const Book = () => {
  const [componentSize, setComponentSize] = useState('default');
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div>
      <Marquee />
       <Navbar />

       
    <div className="form-container">
      <div className="pricing-options">
        <div className="pricing-card">
          <h3>Per Session</h3>
          <p>₹3,500</p>
          <p>Book individual sessions</p>
        </div>
        <div className="pricing-card">
          <h3>Half Yearly Subscription</h3>
          <p>₹31,000</p>
          <p>10 sessions in the duration</p>
        </div>
        <div className="pricing-card">
          <h3>Yearly Subscription</h3>
          <p>₹61,000</p>
          <p>20 sessions per year</p>
        </div>
      </div>
      <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="School name">
        
        <Input />
      </Form.Item>
<Form.Item label="Email">
  <Input />
</Form.Item>

<Form.Item label="Address">
  <Input />
</Form.Item>
<Form.Item label="Phone no">
  <Input />
</Form.Item>

      <Form.Item label="Topic">
        <Select>
          <Select.Option value="Science">Science</Select.Option>
          <Select.Option value="History">History</Select.Option>
          <Select.Option value="Literature">Literature</Select.Option>
        </Select>
      </Form.Item>
      
      <Form.Item label="Sub topic">
        <Cascader
          options={[
            {
              value: 'Science',
              
              label: 'Science',
              children: [
                {
                  value: 'Chemistry',
                  label: 'Chemistry',
                },
              ],
              
            },

            {
              value: 'History',
              
              label: 'History',
              children: [
                {
                  value: 'Mughal Empire',
                  label: 'Mughal Empire',
                },
              ],
            },

            {
              value: 'Literature',
              
              label: 'Literature',
              children: [
                {
                  value: 'Stories',
                  label: 'Stories',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Form.Item label="Date">
        <DatePicker />
      </Form.Item>
     
     
      <Form.Item label="Confirm">
        <Button>Submit</Button>
      </Form.Item>
    </Form>

    </div>
    <Footer/>
    </div>
    
   
  );
};

export default Book;

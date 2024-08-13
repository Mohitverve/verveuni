import React from 'react';
import { Card, Typography, Collapse, Divider } from 'antd';
import '../styles/program.css';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

const DeliveryPartnerProgram = () => {
  return (
    <div className="delivery-partner-container">
      <Card className="delivery-partner-card">
        <Title level={2} className="title">
          Delivery Partner Program
        </Title>
        <Divider />
        <Collapse accordion className="collapse-container">
          <Panel header="What is the Delivery Partner Program?" key="1">
            <Paragraph>
              The Delivery Partner Program is an exclusive initiative where individuals or companies can partner with us to facilitate the delivery of our VR headsets, mobile devices, and content library to schools and colleges.
            </Paragraph>
          </Panel>
          <Panel header="How will it work?" key="2">
            <Paragraph>
              Partners will be assigned delivery tasks via our platform. Once a delivery task is accepted, partners will be responsible for collecting the items from our designated warehouses and ensuring they reach the schools and colleges on time.
            </Paragraph>
          </Panel>
          <Panel header="How much will partners have to pay for joining?" key="3">
            <Paragraph>
              A nominal fee of $100 will be required to join the program. This fee helps us manage the logistics and support required to maintain a seamless delivery experience.
            </Paragraph>
          </Panel>
          <Panel header="What will partners have to deliver?" key="4">
            <Paragraph>
              Partners will be responsible for delivering VR headsets, mobile devices, and content library materials to the specified schools and colleges.
            </Paragraph>
          </Panel>
        </Collapse>
        <Divider />
        <Paragraph className="coming-soon">
          <strong>Coming Soon!</strong> The Delivery Partner Program will be available soon. Stay tuned for updates!
        </Paragraph>
      </Card>
    </div>
  );
};

export default DeliveryPartnerProgram;

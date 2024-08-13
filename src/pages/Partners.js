import React from 'react'
import DeliveryPartnerProgram from '../components/DeliveryPartnerProgram'
import Marquee from '../components/Marquee'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import About from '../components/About'
import { Link, Navigate, useLocation } from 'react-router-dom';
import { Breadcrumb } from 'antd';

const Partners = () => {

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
    <div>
         <Marquee />
         <div className='bread'>
<Breadcrumb items={breadcrumbItems} />
</div>
         <Hero/>
         <About/>
      <DeliveryPartnerProgram/>
      <Footer/>
    </div>
  )
}

export default Partners

import React, { useState, useEffect } from 'react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../components/firebase';
import '../styles/verve.css';

const FAQ = () => {

    



   

    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const faqData = [
        {
            question: "What is Virtual Reality?",
            answer: "Virtual Reality (VR) is a computer-generated environment with scenes and objects that appear to be real, making the user feel they are immersed in their surroundings. This environment is perceived through a device known as a Virtual Reality headset or helmet."
        },
        {
            question: "How and when can I book sessions?",
            answer: "As of now we have not launched our services in the market but we plan on launching by the end of this year and our services will be open."
        },
        {
            question: "Who can book these sessions?",
            answer: "Schools, colleges, and private institutions can book our sessions while individuals can subscribe to our membership plans for our content library."
        },
        {
            question: "Do we get VR headsets too?",
            answer: "Our session includes VR headsets, mobile devices, content library, and an onsite team to setup and help with the session."
        }
    ];

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    
  return (
    <div>
      <div className="faq-container hidden" id="FAQ">
<h3>FAQs</h3>
<div className="faq-header">
    <div>
        <h1>Frequently</h1>
        <h2>asked questions</h2>
    </div>
    <div>
        <p>Discover quick answers to common questions and get clarity on how we partner with you for your needs.</p>
    </div>
</div>
<div className="faq-list">
    {faqData.map((faq, index) => (
        <div key={index} className="faq-question">
            <div className="question-toggle" onClick={() => toggleFaq(index)}>
                {faq.question}
                <span className={`toggle-icon ${openFaqIndex === index ? 'rotate' : ''}`}>&#x25BC;</span>
            </div>
            <div className={`answer ${openFaqIndex === index ? 'open' : ''}`}>
                {faq.answer}
            </div>
        </div>
    ))}
</div>
</div>

    </div>
  )
}

export default FAQ

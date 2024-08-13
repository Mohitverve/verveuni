import React from 'react'

const About = () => {
  return (
    <div>
       <section id="about-us" className="hidden">
                <div className="container">
                    <div className="row">
                        <div className="about-left">
                            <img className="img" loading="lazy" src="/images/vr1.png" alt="About Us" width="100%" />
                        </div>
                        <div className="about-right">
                            <h2>About Us</h2>
                            <h3>EdTech Platform</h3>
                            <p>
                                At VerveIN, we're revolutionizing education by bringing immersive virtual reality experiences straight to your institution's doorstep.
                            </p>
                            <span>
                                With our user-friendly website, you can easily schedule VR simulation sessions for captivating science experiments, engaging historical and cultural lessons, interactive mathematics, language learning adventures, insightful career explorations, and collaborative projects. Simply book an appointment, and our expert VR simulation team, working hand-in-hand with your teachers, will transport your students into a world of knowledge and discovery. It's not just a service; it's an educational journey that transcends traditional boundaries. Let Verve redefine the way your students learn, one immersive experience at a time.
                            </span>
                            <a href="#explore" className="button black-btn">Explore</a>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default About

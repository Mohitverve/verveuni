import React from "react"
import '../styles/footer.css'

export default function Footer (){
    return(
        <section className="new1">
        <footer className="top">
            <img src="/images/vervein.png" alt="VerveIN" />
            <div className="links">
                <div>
                    <h2 style={{ fontWeight: 'bold' }}>Explore Platform</h2>
                    <a href="#about-us">About us</a>
                    <a href="#contact">Contact us</a>
                </div>
                <div>
                    <h2 style={{ fontWeight: 'bold' }}>Features</h2>
                    <a href="intrest.html" >Show Interest</a>
                    <a href="intrest.html" >Book Session</a>

                </div>
            </div>
        </footer>
        <footer className="bottom">
            <div className="legal">
                <span>© 2023 All rights reserved</span>
            </div>
            <div className="links">
                <a href="https://www.instagram.com/verveinnovations?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="  className="fa-brands fa-instagram"></a>
                <a href="https://www.linkedin.com/company/vervein/?viewAsMember=true"  className="fa-brands fa-linkedin"></a>
                <a href="https://x.com/verveinnovate"  className="fa-brands fa-twitter"></a>
                <a href="#" className="fa-brands fa-youtube"></a>
            </div>
        </footer>
    </section>
    )
}
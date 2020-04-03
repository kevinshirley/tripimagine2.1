import React from 'react';
import Fade from 'react-reveal/Fade';
import { IPHONE_ICON, EMAIL_ICON, PLACE_ICON } from 'src/components/material-ui/icons';

function ContactSection2() {
  return (
    <section className="contact-section-2">
      <div className="overlay">
        <div className="contact-desc-container">
          <div className="content">
            <Fade bottom><p>Your overall experience with TripImagine is one that we keep at heart. We pride ourselves in communicating in the shortest amount of time possible. We are here for you. Follow the options outline to get connected.</p></Fade>
          </div>
        </div>

        <div className="contact-box-container">
          <div className="contact-box-wrapper">

            <div className="row">
              <Fade bottom cascade>
                <div className="contact-box">
                  <span>{IPHONE_ICON}</span>
                  <span>Toll Free Number</span>
                  <a className="phone" href="tel:18006150592"><span className="arrow">›</span> 1(800)615-0592</a>
                </div>
              </Fade>

              <Fade bottom cascade>
                <div className="contact-box">
                  <span>{EMAIL_ICON}</span>
                  <span>Email Adress</span>
                  <a className="email" href="mailto:info@tripimagine.com"><span className="arrow">›</span> info@tripimagine.com</a>
                </div>
              </Fade>
            </div>

            <div className="row">
              <Fade bottom cascade>
              <div className="contact-box">
                <span>{PLACE_ICON}</span>
                <span>Office Space</span>
                <span><span className="arrow">›</span> Montreal area, QC, Canada</span>
              </div>
              </Fade>
            </div>

          </div>
        </div>
        {/* Our staff is available to help you 8 a.m. to 7 p.m. Central Time (US) Monday through Friday.
For help connecting with a Virtuoso travel advisor: */}
      </div>
    </section>
  );
};

export default ContactSection2;

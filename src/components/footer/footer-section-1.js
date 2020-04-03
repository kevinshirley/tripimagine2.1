import React from 'react';
import Fade from 'react-reveal/Fade';
import Link from 'src/components/common/link';
import { KS, Logo } from 'src/assets/img';
import { INSTAGRAM_ICON, FACEBOOK_ICON, EMAIL_ICON } from 'src/components/material-ui/icons';

function FooterSection1() {
  var today = new Date(), year = today.getFullYear();

  return (
    <footer className="footer">

        <div className="inner-footer">

          <div className="contact-social">

            <div className="contact">
              <Fade bottom><a className="phone" href="tel:18006150592">1(800)615-0592</a></Fade>
              <Fade bottom><a className="email" href="mailto:info@tripimagine.com">info@tripimagine.com</a></Fade>
            </div>

            <div className="social">
              <ul>
                <Fade bottom><li><a href="https://www.facebook.com/tripimagine" target="_blank" rel="noopener noreferrer">{FACEBOOK_ICON}</a></li></Fade>
                <Fade bottom><li><a href="https://www.instagram.com/tripimagine" target="_blank" rel="noopener noreferrer">{INSTAGRAM_ICON}</a></li></Fade>
                <Fade bottom><li><a href="mailto:info@tripimagine.com">{EMAIL_ICON}</a></li></Fade>
              </ul>
            </div>

          </div>

          <div className="copyrightandall">

            <div className="copyright">
              <Fade bottom><small>&copy; {year} TripImagine, All Rights Reserved.</small></Fade>
            </div>

            <div className="logo">
              <Fade bottom><Link href="/"><img src={Logo} alt="Trip Imagine Logo" /></Link></Fade>
            </div>

            <div className="poweredby">
              <Fade bottom><small>Powered By<a href="http://kevinshirley.com" target="_blank" rel="noopener noreferrer"><img src={KS} alt="Kevin Shirley" /></a></small></Fade>
            </div>

          </div>

          <div className="copyrightandall-mobile">

            <div className="poweredby">
              <Fade bottom><small>Powered By<a href="http://kevinshirley.com" target="_blank" rel="noopener noreferrer"><img src={KS} alt="Kevin Shirley" /></a></small></Fade>
            </div>

            <div className="copyright">
              <Fade bottom><small>&copy; {year} TripImagine, All Rights Reserved.</small></Fade>
            </div>

            <div className="logo">
              <Fade bottom><Link href="/"><img src={Logo} alt="Trip Imagine Logo" /></Link></Fade>
            </div>

          </div>

        </div>

      </footer>
  );
};

export default FooterSection1;
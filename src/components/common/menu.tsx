import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import * as actions from 'src/store/actions';
import storeConnector from 'src/store/selectors/common';
import Link from 'src/components/common/link';
import logo from 'src/assets/img/trip-imagine-logo-only.png';
import lock from 'src/assets/img/data-privacy-lock.png';
import { FLIGHT_TAKE_OFF_ICON, INSTAGRAM_ICON, FACEBOOK_ICON, EMAIL_ICON, CLOSE_ICON, SPACING } from 'src/components/material-ui/icons';

function Menu({ isMenuOpened, closeMenu }) {
  const menuNavigationClasses = cx(
    {
      'nav-is-visible': isMenuOpened,
      'nav-not-visible': !isMenuOpened,
    },
    'navigation',
  );

  const navbarGuestLink = (
    <button className="formBtn">{FLIGHT_TAKE_OFF_ICON}{SPACING}{SPACING}<span>Dream Vacation</span></button>
  );

  const navbarAuthLink = (
    <button className="formBtn"><Link href="/dashboard" className="navbar-icon-link"><i className="material-icons">dashboard</i></Link> <span><Link href="/dashboard" className="navbar-text-link">Dashboard</Link></span></button>
  );

  const menuAuthLinks = (
    <ul>
      <li><Link href="/dashboard"><img src={lock} className="rounded-circle" style={{ width: '25px', marginRight: '5px' }} alt={lock} title="You must have an Avatar connected to your email to display an image" /> Profile</Link></li>
      <li><a href="/">Log Out</a></li>
    </ul>
  );

  const menuGuestLinks = (
    <ul>
      <li><Link href="/login">Log in</Link></li>
      <li><Link href="/register">Sign up</Link></li>
    </ul>
  );

  return (
    <div className="menu-bar">
      <div className={menuNavigationClasses}>

        <div className="content">
          <div className="overlay">
            <nav className="nav-menu">
              <div className="logo">
                <Link href="/"><img src={logo} alt="Trip Imagine Logo" /></Link>
              </div>
              <div className="menu">
                {false ? navbarAuthLink : navbarGuestLink}
                <button className="menuBtn" onClick={closeMenu}>{CLOSE_ICON}{SPACING}{SPACING}<span>Menu</span></button>
              </div>
            </nav>

            <div className="content-split">
              <div className="left">
                <div className="overlay"></div>
              </div>
              <div className="right">
                <div className="authenticate">
                  {false ? menuAuthLinks : menuGuestLinks}
                </div>
                <div className="list-social">
                  <nav className="list">
                    <ul>
                      <li><Link href="/itineraries">Itineraries</Link></li>
                      <li><Link href="/atlas">Atlas</Link></li>
                      <li><Link href="/contact">Contact</Link></li>
                      <li><a href="https://shop.tripimagine.com">Shop</a></li>
                      <li><Link href="/blog">Blog</Link></li>
                      <li><Link href="/about">About</Link></li>
                    </ul>
                  </nav>

                  <div className="social">
                    <ul>
                      <li><a href="https://www.facebook.com/tripimagine" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a></li>
                      <li><a href="https://www.instagram.com/tripimagine" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                      <li><a href="mailto:info@tripimagine.com"><i className="far fa-envelope"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mobile-content">
          <div className="overlay">
            <nav className="nav-menu">
              <div className="logo">
                <Link href="/"><img src={logo} alt="Trip Imagine Logo" /></Link>
              </div>
              <div className="menu">
                {false ? navbarAuthLink : navbarGuestLink}
                <button className="menuBtn" onClick={closeMenu}>{CLOSE_ICON}{SPACING}{SPACING}<span>Menu</span></button>
              </div>
            </nav>

            <div className="authenticate">
              {false ? menuAuthLinks : menuGuestLinks}
            </div>

            <div className="list-social">
              <nav className="list">
                <ul>
                  <li><Link href="/itineraries">Itineraries</Link></li>
                  <li><Link href="/atlas">Atlas</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                  <li><a href="https://shop.tripimagine.com">Shop</a></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/about">About</Link></li>
                </ul>
              </nav>

              <div className="social">
                <ul>
                  <li><a href="https://www.facebook.com/tripimagine" target="_blank" rel="noopener noreferrer">{FACEBOOK_ICON}</a></li>
                  <li><a href="https://www.instagram.com/tripimagine" target="_blank" rel="noopener noreferrer">{INSTAGRAM_ICON}</a></li>
                  <li><a href="mailto:info@tripimagine.com">{EMAIL_ICON}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default connect(
  storeConnector,
  {
    closeMenu: actions.ui.closeMenu,
  },
)(Menu);

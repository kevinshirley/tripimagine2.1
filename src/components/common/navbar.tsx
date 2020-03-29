import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import * as actions from 'src/store/actions';
import storeConnector from 'src/store/selectors/common';
import Link from 'src/components/common/link';
import logo from 'src/assets/img/trip-imagine-logo-only.png';
import lock from 'src/assets/img/data-privacy-lock.png';
import { MENU_ICON, FLIGHT_TAKE_OFF_ICON } from 'src/components/material-ui/icons';

function Navbar({ openMenu }) {
  const navbarGuestLink = (
    <button className="formBtn">{FLIGHT_TAKE_OFF_ICON} <span>Dream Vacation</span></button>
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
      <nav className="nav">
        <div className="logo">
          <Link href="/"><img src={logo} alt="Trip Imagine Logo" /></Link>
        </div>
        <div className="menu">
          {false ? navbarAuthLink : navbarGuestLink}
          <button className="menuBtn" onClick={openMenu}>{MENU_ICON} <span>Menu</span></button>
        </div>
      </nav>

      <form className="trip-form">
        <div className="form-container">
          <nav>
            <div></div>
            <div>
              <h3>Your Dream Vacation</h3>
            </div>
            <div>
              <button><i className="far fa-times-circle"></i></button>
            </div>
          </nav>
          {false && (
            <div className="content row">
              <div className="alert alert-success">
                <div><i className="fas fa-check-circle"></i>&nbsp;{'success'}</div>
                <div><button><i className="far fa-times-circle"></i></button></div>
              </div>
            </div>
          )}
          <div className="content row">
            <div className="input-wrapper form-group">
              <div className="inner-wrap">
                <label htmlFor="trip-form-name" ><i className="fas fa-user"></i></label>
                <div className="input-container">
                  <input type="text" className={cx('form-control', {
                    'trip-is-invalid': false
                  })} name="name" placeholder="Your Name*" value='' onChange={()=>{}} id="trip-form-name"/>
                  {false && (
                    <small className="trip-invalid-feedback">{'errors.name'}</small>
                  )}
                </div>
              </div>
            </div>
            <div className="input-wrapper form-group">
              <div className="inner-wrap">
                <label htmlFor="trip-form-email" ><i className="far fa-envelope"></i></label>
                <div className="input-container">
                  <input type="email" className={cx('form-control', {
                    'trip-is-invalid': false
                  })} name="email" placeholder="Your Email*" value='' onChange={()=>{}} id="trip-form-email"/>
                  {false && (
                    <small className="trip-invalid-feedback">{'errors.email'}</small>
                  )}
                </div>
              </div>
            </div>
            <div className="input-wrapper form-group">
              <div className="inner-wrap">
                <label htmlFor="trip-form-phone" ><i className="fas fa-mobile-alt"></i></label>
                <div className="input-container">
                  <input type="text" className={cx('form-control', {
                    'trip-is-invalid': false
                  })} name="phone" placeholder="Your Phone*" value='' onChange={()=>{}} id="trip-form-phone"/>
                  {false && (
                    <small className="trip-invalid-feedback">{'errors.phone'}</small>
                  )}
                </div>
              </div>
            </div>
            <div className="input-wrapper form-group">
              <div className="inner-wrap">
                <label htmlFor="trip-form-message" ><i className="fas fa-pencil-alt"></i></label>
                <div className="input-container">
                  {/* <textarea type='text' className={cx('form-control', {
                    'trip-is-invalid': false
                  })} name="message" value='' placeholder="Your Message*" id="trip-form-message"></textarea> */}
                  {false && (
                    <small className="trip-invalid-feedback">{'errors.message'}</small>
                  )}
                </div>
              </div>
            </div>
            <div className="button-wrapper">
              <button><div>Send&nbsp;</div><div><i className="fab fa-telegram-plane"></i></div></button>
              <div className="secure-lock-container"><img src={lock} alt="Secure Data License" />&nbsp;<small>Secure Private Data</small></div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default connect(
  storeConnector,
  {
    openMenu: actions.ui.openMenu,
  },
)(Navbar);

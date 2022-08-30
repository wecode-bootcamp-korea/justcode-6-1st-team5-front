import React from 'react';
import './Footer.scss';
import FooterTop from './FooterTop/FooterTop';
import FooterBottom from './FooterBottom/FooterBottom';

function Footer() {
  return (
    <div className="footer_container flex_center">
      <FooterTop />
      <FooterBottom />
    </div>
  );
}

export default Footer;

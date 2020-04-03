import React from 'react';
import ContactSection1 from 'src/components/contact/contact-section-1';
import ContactSection2 from 'src/components/contact/contact-section-2';
import ContactSection3 from 'src/components/contact/contact-section-3';

function Contact() {
  return (
    <React.Fragment>
      <ContactSection1 />
      <ContactSection2 />
      <ContactSection3 />
    </React.Fragment>
  );
};

export default Contact;

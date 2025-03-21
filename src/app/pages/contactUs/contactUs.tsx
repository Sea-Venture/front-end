import React from 'react';
import ContactUs from '../../components/organism/contactUs/contactUs';

const ContactUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <ContactUs />
      </main>
    </div>
  );
};

export default ContactUsPage;
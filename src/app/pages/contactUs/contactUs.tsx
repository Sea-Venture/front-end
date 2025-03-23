import React from 'react';
import ContactUs from '../../components/organism/contactUs/contactUs';

const ContactUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        <ContactUs />
      </main>
    </div>
  );
};

export default ContactUsPage;
import ContactInfo from "../../molecule/contactUs/contactInfo";

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-12 bg-white">
      <h2 className="text-3xl font-bold text-black">Get in Touch</h2>
      <p className="text-black mb-6">We'd love to hear from you!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactInfo />
        <div className="bg-white flex items-center justify-center h-64 md:h-auto border border-black">
          <p className="text-black">Map/Image Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
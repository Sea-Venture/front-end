import ContactInfo from "../../molecule/contactUs/contactInfo";

const ContactUs = () => {
    return (
      <div className="container mx-auto px-6 py-12 bg-gray-100 rounded-lg">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-center text-gray-500 mb-8">We'd love to hear from you!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ContactInfo />
          <div className="flex items-center justify-center h-64 bg-white shadow-md rounded-lg">
            <p className="text-gray-500">Map/Image Placeholder</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactUs;
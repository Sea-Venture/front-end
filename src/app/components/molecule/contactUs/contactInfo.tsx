import ContactDetail from "./contactDetail";

const ContactInfo = () => {
    return (
      <div className="grid gap-6">
        <ContactDetail 
          icon="📧" 
          title="Email" 
          description="Reach us anytime" 
          link="mailto:info@seaventures.com" 
          linkText="info@seaventures.com" 
        />
        <ContactDetail 
          icon="📞" 
          title="Phone" 
          description="Call us for inquiries" 
          link="tel:+15551234567" 
          linkText="+1 (555) 123-4567" 
        />
        <ContactDetail 
          icon="📍" 
          title="Office" 
          description="456 Beach Ave, Colombo 00100, Sri Lanka" 
          link="#" 
          linkText="Get Directions →" 
        />
      </div>
    );
  };
  
  export default ContactInfo;
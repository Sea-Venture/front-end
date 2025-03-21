interface ContactTextProps {
    title: string;
    description: string;
  }
  
  const ContactText = ({ title, description }: ContactTextProps) => {
    return (
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    );
  };
  
  export default ContactText;
  
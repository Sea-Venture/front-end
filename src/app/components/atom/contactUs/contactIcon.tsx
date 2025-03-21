interface ContactIconProps {
    children: React.ReactNode;
  }
  
  const ContactIcon = ({ children }: ContactIconProps) => {
    return (
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl">
        {children}
      </div>
    );
  };
  
  export default ContactIcon;
  
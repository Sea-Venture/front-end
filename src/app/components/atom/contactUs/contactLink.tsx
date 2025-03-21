interface ContactLinkProps {
    href: string;
    text: string;
  }
  
  const ContactLink = ({ href, text }: ContactLinkProps) => {
    return (
      <a href={href} className="text-blue-600 hover:text-blue-800 font-medium transition duration-200">
        {text}
      </a>
    );
  };
  
  export default ContactLink;
  
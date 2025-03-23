
interface ContactIconProps {
  children: React.ReactNode;
}

const ContactIcon = ({ children }: ContactIconProps) => {
  return <span className="text-xl text-black">{children}</span>;
};

export default ContactIcon;

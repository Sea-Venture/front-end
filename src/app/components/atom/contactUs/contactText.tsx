interface ContactTextProps {
  title: string;
  description: string;
}

const ContactText = ({ title, description }: ContactTextProps) => {
  return (
    <div>
      <h3 className="font-semibold text-black">{title}</h3>
      <p className="text-black">{description}</p>
    </div>
  );
};

export default ContactText;
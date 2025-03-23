import ContactIcon from "../../atom/contactUs/contactIcon";
import ContactText from "../../atom/contactUs/contactText";
import ContactLink from "../../atom/contactUs/contactLink";

interface ContactDetailProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

const ContactDetail = ({ icon, title, description, link, linkText }: ContactDetailProps) => {
  return (
    <div className="mb-4 flex items-start gap-3">
      <ContactIcon>{icon}</ContactIcon>
      <div>
        <ContactText title={title} description={description} />
        {link && linkText && <ContactLink href={link} text={linkText} />}
      </div>
    </div>
  );
};

export default ContactDetail;
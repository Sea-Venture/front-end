
interface ContactLinkProps {
  href: string;
  text: string;
}

const ContactLink = ({ href, text }: ContactLinkProps) => {
  return (
    <a href={href} className="text-black hover:underline">
      {text}
    </a>
  );
};

export default ContactLink;

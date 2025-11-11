import { Contact } from "../types";

interface Props {
  contact: Contact | null | undefined;
}

function ContactCard({ contact }: Props) {
  if (!contact) {
    return <></>;
  }
  return (
    <div data-testid="contact-card" className="contactCard" key={contact.id}>
      <p>First name: {contact.firstName}</p>
      <p>Last name: {contact.lastName}</p>
      <p>Notes: {contact.notes}</p>
    </div>
  );
}

export default ContactCard;

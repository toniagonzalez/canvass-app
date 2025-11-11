import { useContext } from "react";
import { ContactsContext } from "../Contexts";
import { Contact } from "../types";
import ContactCard from "./ContactCard";

function ContactList() {
  const contacts = useContext(ContactsContext);
  if (contacts.length === 0) {
    return (
      <div data-testid="contact-list" className="contactList">
        <p>Your contacts will be displayed here</p>
      </div>
    );
  }

  return (
    <div data-testid="contact-list" className="contactList">
      {contacts?.map((contact: Contact) => {
        return (
          <div key={contact.id}>
            <ContactCard contact={contact} />
          </div>
        );
      })}
    </div>
  );
}

export default ContactList;

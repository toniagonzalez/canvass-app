import React, { useEffect, useState } from "react";

import { ContactsContext } from "../Contexts";

import ContactList from "./ContactList";
import { Contact } from "../types";
import Header from "./Header";
import ContactForm from "./ContactForm";

function Main() {
  const [contacts, setContacts] = useState<Contact[] | []>([]);
  const [showList, setShowList] = useState<boolean>(true);

  const handleButtonClick = (): void => {
    setShowList(false);
  };

  useEffect(() => {
    fetch("http://localhost:8080/contacts/")
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        setContacts(data.contacts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!showList) {
    return <ContactForm />;
  }

  return (
    <ContactsContext value={contacts}>
      <Header />
      <h3>Welcome</h3>
      <div data-testid="add-contact-button">
        <button className="addContactButton" onClick={handleButtonClick}>
          Add contacts
        </button>
      </div>
      {showList ? <ContactList /> : <></>}
    </ContactsContext>
  );
}

export default Main;

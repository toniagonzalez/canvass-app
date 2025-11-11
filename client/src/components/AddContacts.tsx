import { useState } from "react";

import ContactCard from "./ContactCard";

function AddContact() {
  const [showCard, setShowCard] = useState<boolean>(false);

  const handleButtonClick = (): void => {
    setShowCard(true);
  };

  return (
    <div data-testid="add-contact-button">
      {showCard ? <ContactCard contact={undefined} /> : <></>}
      <button className="addContactButton" onClick={handleButtonClick}>
        Add Contact
      </button>
    </div>
  );
}

export default AddContact;

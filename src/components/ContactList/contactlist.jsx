import { ContactItem } from "components/PhoneItem/phoneitem.jsx"
import   './contactlist.css';

export const ContactsList = ({ contacts, handleDeleteContact }) => {
    return (
      <div>
        <ul>
          {contacts.map(contact => (
            <ContactItem
              handleDeleteContact={handleDeleteContact}
              key={contact.id}
              contact={contact}
            />
          ))}
        </ul>
      </div>
    );
  };
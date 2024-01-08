import { useState } from 'react'
import { ContactForm } from './components/ContactForm'
import { ContactList } from './components/ContactList'

function App() {
  //Skicka { contacts } när komponenten presenterar data
  const [contacts, setContact] = useState([
    {
      id: 1,
      name: "Felicia",
      email: "feliciahu1992_@hotmail.com"
    },
    {
      id: 2,
      name: "Kalle",
      email: "Kalleanka_@hotmail.com"
    },
    {
      id: 3,
      name: "Kitty",
      email: "Hellokitty_@hotmail.com"
    },
  ])
  
  //
  const handleRemove = (id) => {
    const newList = contacts.filter(contact => contact.id !== id);

    setContact(newList);
  }
  
  //Skicka { addNewContact } när komponenten lägger till nya data
  const addNewContact = (name, email) => {
    const newContact = {
      id: contacts.length + 1,
      name: name,
      email: email
    };
    setContact([...contacts, newContact])
  }


  
  
  return (
    <>
      <header>
        <ContactForm addNewContact={addNewContact}/>
      </header>
      <main>
        <ContactList contacts={contacts} handleRemove={handleRemove} />
      </main>
      
    </>
  )
}

export default App

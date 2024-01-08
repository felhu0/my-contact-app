

//Komponenten Presenterar Data

export const ContactList = ({ contacts, handleRemove }) => {

   

   

    return (
        <div>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <p>id: {contact.id} name: {contact.name} email: {contact.email}</p>
                        <button onClick={() => handleRemove(contact.id)}>Delete contact</button>
                    </li>
                ))
                }
            </ul>
            
        </div>
    )
}
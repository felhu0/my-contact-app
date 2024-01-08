import { useState } from "react"


//Komponenten lägger till nya data

export const ContactForm = ({ addNewContact }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    
    // Kontrollera att både namn och e-post inte är tomma
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() && email.trim()) {
            addNewContact(name, email);
            setName('');
            setEmail('');
        } else {
            console.log("Both name and email are required")
        }
        
       
    }
    

   
    return (


        <div>
            <form className="form-group" onSubmit={handleSubmit}>
                <div className="form-input-name form-input">
                    <label>Your name: </label>
                    <input type="text" value={name} onChange={handleNameChange}/>
                </div>
                <div className="form-input-email form-input">
                    <label>Your email: </label>
                    <input  type="text" value={email} onChange={handleEmailChange}/>
                    
                </div>
                <div className="form-btn btn">
                    <button type="submit">Add contact</button>
                </div>
             
            </form>
           

        </div>
    )
}
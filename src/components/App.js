import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  
         //object ( when usestate is not used )
  // const add_contact = [
  //   {
  //     id: "1",
  //     name: "John",
  //     email: "johngreen282@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     name: "Baldwin",
  //     email: "baldwinkim582@gmail.com"
  //   } ];

  const LOCAL_STORAGE_KEY = "contacts";

  // initially empty array for contacts
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {

    console.log(contact);
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    const retreiveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retreiveContacts) setContacts(retreiveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts}/>
   </div>
  );
}

export default App;

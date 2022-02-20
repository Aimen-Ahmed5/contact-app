import React, {useState} from 'react';
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

  // initially empty array for contacts
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {

    console.log(contact);
  }

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler = {addContactHandler}/>
      {/* <ContactList contacts = {add_contact}/>  */}
   </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {

  const add_contact = [
    {
      id: "1",
      name: "John",
      email: "johngreen282@gmail.com"
    },
    {
      id: "2",
      name: "Baldwin",
      email: "baldwinkim582@gmail.com"
    }
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts = {add_contact}/> 
   </div>
  );
}

export default App;

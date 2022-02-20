import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    // console.log(props);

    // id is recieved from ContactCard
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        // id is transfered from ContactCArd to ContactList and then to App
        return <ContactCard 
        contact = {contact} 
        clickHandler = {deleteContactHandler} 
        key={ contact.id}/>
    });

    return (
    <div className="ui celled list"> {renderContactList} </div> 
    );
};

export default ContactList;
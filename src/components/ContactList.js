import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    // console.log(props);

    const renderContactList = props.contacts.map((add_contact) => {
        return <ContactCard contacts = {add_contact}/>
    });

    return (
    <div className="ui celled list"> {renderContactList} </div> 
    );
};

export default ContactList;
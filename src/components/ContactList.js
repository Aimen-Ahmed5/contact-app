import React from "react";

const ContactList = (props) => {
    // console.log(props);

    const renderContactList = props.contacts.map((add_contact) => {
        return (
            <div className="item ">
                <div className="content">
                    <div className="header">{add_contact.name}</div>
                    <div>{add_contact.email}</div>
                </div>
                <i className="trash alternate outline icon"></i>
            </div>
        );
    });

    return (
    <div className="ui celled list"> Contact List </div> 
    );
};

export default ContactList;
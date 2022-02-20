import React from 'react';

const AddContact = () => {

   const state = {
        name: "",
        email: ""
    }

   const add = (event) => {
        event.preventDefault();
        if(this.state.name === "" && this.state.email === ""){
            alert("All fields are mandatory");
            return;
        }

        this.props.addContactHandler(this.state);
        console.log(this.state);
    }

    return (
        <div className="ui main">
            <h3>Add Contact</h3>
            <form className="ui form" onSubmit= {(this.add) }>
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" value={this.state.name} 
                    onChange={ (event) => this.setState({name: event.target.value}) }/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email" value={this.state.email} 
                    onChange={ (event) => this.setState({email: event.target.value}) } />
                </div>
                <button className="ui button blue">Add</button>
            </form>
        </div>
    );
}

export default AddContact;
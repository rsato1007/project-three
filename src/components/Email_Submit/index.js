import React from "react";
//input field for email, to be used with the login and signup pages. gets functionality from parent object.
const Email = (props) => {
    return (
        <div className="email-input">
            <input 
                onChange={props.onChange}
                value={props.email}
                title="email"
                placeholder="Email"
            />
        </div>
    );
};

//button to be used for login and sign up pages, takes functionality and text from parent object
const Submit = (props) => {
    return (
        <div className="LogButton">
            <button onClick={props.handleSubmit}>{props.buttonText}</button>
        </div>
    );
};

export {
    Email,
    Submit
};
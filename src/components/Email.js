import React from "react";
//input field for email, to be used with the login and signup pages. gets functionality from parent object.
const Email = (props) => {
    return (
        <div className="email-input">
            <input 
                onChange={props.onChange}
                value={email}
                title="email"
                placeholder="Email"
            />
        </div>
    );
};

export default Email;
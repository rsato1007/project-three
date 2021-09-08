import React from "react";

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
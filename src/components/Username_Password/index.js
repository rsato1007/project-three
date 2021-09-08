import React from 'react';

/* maybe set should state variables on signup page */

const Username_Password = (props) => {
    return (
        <div className="username-password">
            <input 
                onChange={(e) => props.setName(e.target.value)}
                value={props.setName}
                type="text"
                name="Username"
                placeholder="USERNAME"
            />
            <input 
                onChange={(e) => props.setPassword(e.target.value)}
                value={props.setPassword}
                type="password"
                name="Password"
                placeholder="PASSWORD"
            />
        </div>
    )
};

export default Username_Password
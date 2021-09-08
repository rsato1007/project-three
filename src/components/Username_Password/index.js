import React from 'react';

/* maybe set should state variables on signup page */

const Username_Password = ({name, password}) => {
    return (
        <div className="username-password">
            <input 
                onChange={(e) => setName(e.target.value)}
                value={setName}
                type="text"
                name="Username"
                placeholder="USERNAME"
            />
            <input 
                onChange={(e) => setPassword(e.target.value)}
                value={setPassword}
                type="password"
                name="Password"
                placeholder="PASSWORD"
            />
        </div>
    )
};

export default Username_Password
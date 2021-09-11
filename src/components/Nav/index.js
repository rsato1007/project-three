import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import SignupPage from "../../pages/SignUpPage";
import LoginPage from "../../pages/LoginPage";

class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className="commons-nav">
                    <Link to="/">
                        {/* This will need to be changed */}
                        Home
                    </Link>
                </div>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={(props) => <SignupPage {...props} />}
                    />
                </Switch>
                <Switch>
                    <Route
                        exact
                        path="/login"
                        render={(props) => <LoginPage {...props} />}
                    />
                </Switch>
            </div>
        );
    }
}

export default Nav;
import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import SignupPage from "../../pages/SignUpPage";
import LoginPage from "../../pages/LoginPage";

class Nav extends React.Component {
    render() {
        return (
            <div>
                <div className="commons-nav">
                    {/* Using as base example */}
                    <Link to="/">
                        Home
                    </Link>
                </div>
                <Switch>
                    {/* Using as base example */}
                    <Route
                        exact
                        path="/"
                        render={(props) => <SignupPage {...props} />}
                    />
                </Switch>
                <Switch>
                    {/* Using as base example */}
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
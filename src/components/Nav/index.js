import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import SignupPage from "../../pages/SignUpPage";
import LoginPage from "../../pages/LoginPage";
import CommonsPage from "../../pages/CommonsPage";
import "./styles.css";

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
                    <Route
                        path="/login"
                        render={(props) => <LoginPage {...props} />}
                    />
                    <Route
                        path="/commons"
                        render={(props) => <CommonsPage {...props} />}
                    />
                </Switch>
            </div>
        );
    }
}

export default Nav;
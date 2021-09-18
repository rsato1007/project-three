import React from "react";
import "./styles.css";
import { Route, Link, Switch } from "react-router-dom";
import SignupPage from "../../pages/SignUpPage";
import LoginPage from "../../pages/LoginPage";
import CommonsPage from "../../pages/CommonsPage";
import PersonalPage from "../../pages/PersonalPage";
import "./styles.css";

class Nav extends React.Component {
    render() {
        return (
            <div className="navbar">
                <div className="commons-nav">
                    <Link to="/">
                        {/* This will need to be changed */}
                        Home
                    </Link>
                    <Link to="profile-nav">
                        Profile
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
                    <Route
                        path="/profile"
                        render={(props) => <PersonalPage {...props} />}
                        />
                </Switch>
            </div>
        );
    }
}

export default Nav;
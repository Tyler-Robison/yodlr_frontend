import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from "react-bootstrap";

/** NavBar is always visible, allows quick navigation between the site's main features
 * 
 * loggedOutView - dispays login/sign-up and continue as guest button
 * 
 * loggedInView - displays the four main features of the site (Find Recipes, Saved Recipes, Mealplan, Calculate Points) and logout button
  */
const NavBar = () => {

    return (
        <Navbar className="NavBar" expand="lg">

            <Navbar.Brand className="NavBar-Brand">
                <NavLink className="nav-link" to="/">
                    Yodlr
                </NavLink>
            </Navbar.Brand>

            <NavLink className="nav-link" to="/admin_panel">
                Admin
            </NavLink>

            <NavLink className="nav-link" to="/register">
                Register
            </NavLink>
        </Navbar>
    )
}

export default NavBar;
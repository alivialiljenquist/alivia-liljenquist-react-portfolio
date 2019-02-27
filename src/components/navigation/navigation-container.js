import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="links">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
                <NavLink className="nav-link" exact to="/about-me">About</NavLink>
                <NavLink className="nav-link" exact to="/contact-me">Contact</NavLink>
                <NavLink className="nav-link" exact to="/blog">Blog</NavLink>

                {/* {true ? <NavLink exact to="/add-blog">Add Blog</NavLink> : null} */}
            </div>
        )
    }
}
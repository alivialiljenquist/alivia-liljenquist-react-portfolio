import React, { Component } from "react";
import { Link } from "react-router-dom";

export default function() {
    return (
        <div>
            Blog

            <div>
                <Link to="/about-me">read more about me</Link>
            </div>
        </div>

    )
}
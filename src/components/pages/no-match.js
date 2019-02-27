import React from "react";
import { Link } from 'react-router-dom'

export default function(props) {
    return(
        <div>
            <h2>We Couldn't Find that Page</h2>
            <Link to="/">Return to Home Page</Link>
           
        </div>
    )
}
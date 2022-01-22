import React from 'react';
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <div className="card-body">
                    <h1>That page doesn't exist!</h1>
                    <p>Sorry, the page you were looking for could not be found. Return to the <Link to={`/`}>home page</Link></p>
                </div>
            </div>
        </div>
    )
}

export default NotFound;

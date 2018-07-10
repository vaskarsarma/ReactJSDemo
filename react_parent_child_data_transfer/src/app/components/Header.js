import React from "react";

export const Header=(props)=> {
            return(
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container">
                        <div className="navbar-header">
                            <ul className="nav navbar-nav">
                                <li><a href="#">{props.homelink}</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
        );
} 
import React from "react";

export class Header extends React.Component{
    render(){
        return(
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container">
                        <div className="navbar-header">
                            <ul className="nav navbar-nav">
                                <li><a href="#">HOME</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
        );
    }
} 
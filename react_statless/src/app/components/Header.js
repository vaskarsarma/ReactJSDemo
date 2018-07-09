import React from "react";
import PropTypes from "prop-types";

export const Header =(props)=>{
        return(
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container">
                        <div className="navbar-header">
                            <ul className="nav navbar-nav">
                               {props.menulist.map((item,i)=>
                                <li key={i}><a href={item.url}>{item.title}</a></li>
                            )}                            
                            </ul>
                        </div>
                    </div>
                </nav>
        );
}; 

Header.propType={
    menulist:PropTypes.object
};


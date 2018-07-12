import React from "react";
import {Header} from "./Header";
import {Main} from "./Main";

export const Root =() => {
    return(
       <div className = "container" >
            <Header/>
            <Main/>
        </div>
        );
    }
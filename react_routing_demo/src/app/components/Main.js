import React from "react";
import {Switch,Route} from "react-router-dom";

import {Home} from "./Home";
import {User} from "./User";

export const Main =() => {
    return(
        <div className = "row" >
            <div className = "col-lg-12 col-xs-12" >
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/home'} component={Home}/>
                    <Route path={'/user'} component={User}/>
                </Switch>
            </div> 
        </div>
    )
}
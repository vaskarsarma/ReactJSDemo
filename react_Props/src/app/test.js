import React from 'react';
import ReactDOM from 'react-dom';
import '../style/test.css';
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class Mycomponent extends React.Component {
    render() {
        var users={
            name:"vaskar",
            hobbies:["reading","watching movies"]
        };
        return ( 
            <div className = "container" >
                <div className = "row" >
                    <div className = "col-lg-10 col-xs-10 col-xs-offset-1" >
                        <Header/>
                    </div> 
                </div> 
                <div className = "row" >
                    <div className = "col-xs-10 col-xs-offset-1" >
                        <Home name={"Vaskar Sarma"} age={35} users={users}>
                            <p>This is a child element!</p>
                        </Home>
                    </div> 
                </div> 
            </div>
        )
    }
}

ReactDOM.render( <
    Mycomponent / > ,
    document.getElementById('testapp')
);
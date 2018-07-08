import React from 'react';
import ReactDOM from 'react-dom';
import '../style/test.css';
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class Mycomponent extends React.Component {
    render() {
        let content= (5==2) ? "Use Case Passed" :" Use Case Failed";
        return ( 
            <div className = "container" >
                <div className = "row" >
                    <div className = "col-lg-10 col-xs-10 col-xs-offset-1" >
                        <Header/>
                    </div> 
                </div> 
                <div className = "row" >
                    <div className = "col-xs-10 col-xs-offset-1" >
                        <Home/>
                        <p><b><u><i>Example to render Dynamic Content</i></u></b></p>
                        {content}
                        <br/>
                        { 2+2 }
                        <br/>
                        { (5 ==2) ? "false" :"true" }
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
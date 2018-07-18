import React from 'react';
import ReactDOM from 'react-dom';
import '../style/test.css';
import { Root } from "./components/Root";
import { BrowserRouter,HashRouter } from 'react-router-dom';

class Mycomponent extends React.Component {
    render() {
        return ( 
               <BrowserRouter>
                 <Root/>
               </BrowserRouter>
        );
    }
}

ReactDOM.render( 
    <Mycomponent/> ,
    document.getElementById('testapp')
);
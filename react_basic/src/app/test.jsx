import React from 'react';
import ReactDOM from 'react-dom';

class Mycomponent extends React.Component {
    render() {
        return ( 
            <div className = "container" >
            <div className = "row" >
            <div className = "col-xs-10 col-xs-offset-1" >
            <h1> Testing my first reactjs application!!!Vaskar Sarma </h1> 
            </div> </div> </div>
        )
    }
}

ReactDOM.render( <
    Mycomponent / > ,
    document.getElementById('testapp')
);
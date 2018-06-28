import React from 'react';
import ReactDOM from 'react-dom';

class Mycomponent extends React.Component{
    render(){
        return (
            <h1>Testing my first reactjs application!!! Vaskar Sarma</h1>
        )
    }
}

ReactDOM.render(
    <Mycomponent/>,
    document.getElementById('testapp')
);
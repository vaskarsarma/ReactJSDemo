import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    constructor(props){
        super();
        this.state={
            age: props.initialAge,
            status:0
        };
        setTimeout(() => {
        this.setState({
            status:1
        })
        }, 3000);
    }
    
    onMakeOlder() {
        this.setState({
            age: this.state.age + 3            
        });
        console.log(this.state.age);
    }

render(){
    return(
        <div>
            <p>This is Home Page</p>
            <p>My name is {this.props.name} and my age is {this.state.age}</p>
            <p>Status is {this.state.status}</p>
            <hr/>
            <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Add Age</button>
            <hr/>
            <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
        </div>          
    );
}
}

// Type Checking
Home.propType={
  name:PropTypes.string,
  age:PropTypes.number,
  greet:PropTypes.func
};
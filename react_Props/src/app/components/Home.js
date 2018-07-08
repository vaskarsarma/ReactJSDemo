import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component{
render(){
    return(
        <div>
            <p>This is Home Page</p>
            <p>My name is {this.props.name} and my age is {this.props.age}</p>

            <p>{this.props.users.name}'s hobbies are :</p>
                <ul>
                    {this.props.users.hobbies.map((hobby,i)=><li key={i}>{hobby}</li>)}
                </ul>
            <hr/>
                {this.props.children}
        </div>          
    );
}
}

// Type Checking
Home.propType={
  name:PropTypes.string,
  age:PropTypes.number,
  users:PropTypes.object,
  children:PropTypes.element.isRequired
};
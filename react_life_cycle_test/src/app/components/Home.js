import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
    constructor(props){
        super();
        this.state={
            age: props.initialAge,
            status:0,
            homelink:props.initialLink
        };
        setTimeout(() => {
        this.setState({
            status:1
        })
        }, 3000);
        console.log("constructor");
    }

    componentWillMount(){
        console.log("Component will mount");
    }
    
    componentDidMount(){
        console.log("Component did mount");
    }

    componentWillReceiveProps(nextProps,nextState)
    {
        console.log("Component will recieve props",nextProps,nextState );
    }
    
    shouldComponentUpdate(nextProps,nextState)
    {
        console.log("should component update",nextProps,nextState );
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log("Component will update", nextProps, nextState);
    } 

    componentDidUpdate(prevProps, prevstat){
        console.log("Component did mount", prevProps, prevstat);
    } 

    componentWillUnmount(){
        console.log("Component will unmount");
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3            
        });
        console.log(this.state.age);
    }

    onChangeLink(){
        this.props.changelink(this.state.homelink);
    }

    onChangeText(event){
        this.setState({
            homelink:event.target.value
        });
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
            <hr/>
            <input type="text" value={this.state.homelink}
            onChange={(event)=> this.onChangeText(event)} 
            />
            <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Link</button>
        </div>          
    );
}
}

// Type Checking
Home.propType={
  name:PropTypes.string,
  age:PropTypes.number,
  greet:PropTypes.func,
  initialLink:PropTypes.string
};
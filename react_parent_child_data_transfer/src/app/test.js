import React from 'react';
import ReactDOM from 'react-dom';
import '../style/test.css';
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class Mycomponent extends React.Component {
    constructor(){
        super();
        this.state={
            homeLink:"Test Home Link To be changed"
        }
    }
    
    onGreet(){
        alert("Hello!!");
    }

    onChangeLink(namelink){
        this.setState({
            homeLink:namelink
        });
    }

    render() {
        return ( 
            <div className = "container" >
                <div className = "row" >
                    <div className = "col-lg-10 col-xs-10 col-xs-offset-1" >
                        <Header homelink={this.state.homeLink} />
                    </div> 
                </div> 
                <div className = "row" >
                    <div className = "col-xs-10 col-xs-offset-1" >
                        <Home 
                        name={"Vaskar Sarma"} 
                        initialAge={35} 
                        greet={this.onGreet} 
                        changelink={this.onChangeLink.bind(this)}
                        />
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
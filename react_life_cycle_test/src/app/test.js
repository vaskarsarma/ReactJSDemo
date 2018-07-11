import React from 'react';
import ReactDOM from 'react-dom';
import '../style/test.css';
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class Mycomponent extends React.Component {
    constructor(){
        super();
        this.state={
            homeLink:"Test Home Link To be changed",
            isHomeMounted:true
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

    onChangeMounted(){
        this.setState({
            isHomeMounted:!this.state.isHomeMounted
        });
    }

    render() {
        let hmeComp="";
        if(this.state.isHomeMounted)
        {
        hmeComp=
            <Home 
                name={"Vaskar Sarma"} 
                initialAge={35} 
                greet={this.onGreet} 
                changelink={this.onChangeLink.bind(this)}
                initialLink={this.state.homeLink}
            />;
        }
        
        return ( 
            <div className = "container" >
                <div className = "row" >
                    <div className = "col-lg-10 col-xs-10 col-xs-offset-1" >
                        <Header homelink={this.state.homeLink} />
                    </div> 
                </div> 
                <div className = "row" >
                    <div className = "col-xs-10 col-xs-offset-1" >
                        {hmeComp}
                    </div> 
                </div> 
                <div className = "row" >
                    <div className = "col-xs-10 col-xs-offset-1" >
                        <button onClick={()=>this.onChangeMounted()} className="btn btn-primary"> (Un)mount Home</button>
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
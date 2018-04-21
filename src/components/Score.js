import React from "react";
import "../styles/score.css";

class Score extends React.Component {

    constructor(props){
        super(props);
    }

render(){
    return (
        <div>
            <div className="jumbotron">
            <h1 class="display-4">Clicky Game</h1> </div>
            <div className= "navbar-nav">Current score : {this.props.score} | Top Score : {this.props.topscore}</div>
           
        </div>
    )
}
}
export default Score;

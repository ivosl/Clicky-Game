import React from "react";

class Score extends React.Component {

    constructor(props){
        super(props);
    }

render(){
    return (
        <div>
            <div className= "navbar-nav">Current score : {this.props.score} | Top Score : {this.props.topscore}</div>
           
        </div>
    )
}
}
export default Score;

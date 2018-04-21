import React from 'react';
import "../styles/cards.css";

export default class Cards extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="card">
            <img src = {this.props.image} onClick = {this.props.onClick}/>
            </div>
        )
    }
}
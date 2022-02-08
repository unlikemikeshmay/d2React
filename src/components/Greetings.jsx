import React from 'react';

export default class Greeting extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        let message = (this.props.email)
        ? `Hi, ${this.props.email}!`
        : "You're not logged in.";
        return (
            <span>{message}</span>
        )
    }
}

import React, { Component } from "react";

class Counter extends Component {
    state = {
        value: this.props.value,
    };

    incrementCounter = (args) => {
        this.setState({value: this.state.value + 1});
    };

    formatCount = () => this.state.value === 0 ? "Zero" : this.state.value;

    render() {
        return (
            <div>
                <span style={{ fontSize: 24, width: 100 }} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-lg" 
                    onClick = {() => this.incrementCounter({id: 1})}>
                        Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (this.state.value === 0 ? "badge-warning" : "badge-primary");
        return classes;
    }
}
 
export default Counter;
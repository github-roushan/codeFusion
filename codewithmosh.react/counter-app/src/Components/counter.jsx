import React, { Component } from "react";

class Counter extends Component {
    formatCount = () => this.props.counter.value === 0 ? "Zero" : this.props.counter.value;

    render() {
        return (
            <div>
                <span style={{ fontSize: 24, width: 100 }} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-lg" 
                    onClick = {() => this.props.onIncrement(this.props.counter)}>
                        Increment
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (this.props.counter.value === 0 ? "badge-warning" : "badge-primary");
        return classes;
    }
}
 
export default Counter;
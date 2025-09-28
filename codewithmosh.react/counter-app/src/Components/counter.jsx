import React, { Component } from "react";
import { BsPlus, BsDash } from "react-icons/bs";
import { FaTrash } from 'react-icons/fa';
class Counter extends Component {
    formatCount = () => this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
    render() {
        const isDisabled = this.props.counter.value === 0;
        return (
            <div>
                <span style={{ fontSize: 24, width: 100 }} className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-lg" 
                    onClick = {() => this.props.onIncrement(this.props.counter)}>
                    <BsPlus />
                </button>
                <button className="btn btn-secondary btn-lg ml-2" disabled={isDisabled}
                    onClick = {() => this.props.onDecrement(this.props.counter)}>
                    <BsDash />
                </button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">
                    <FaTrash />
                </button>
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
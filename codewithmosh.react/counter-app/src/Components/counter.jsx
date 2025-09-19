import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0,
        tags: ["tag1", "tag2", "tag3"]
    };

    incrementCounter = (args) => {
        console.log(args);
        this.setState({count: this.state.count + 1});
    };

    formatCount = () => this.state.count === 0 ? "Zero" : this.state.count;

    render() { 
        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm" 
                    onClick = {() => this.incrementCounter({id: 1})}>
                        Increment
                </button>
                <ul>
                    {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (this.state.count === 0 ? "badge-warning" : "badge-primary");
        return classes;
    }
}
 
export default Counter;
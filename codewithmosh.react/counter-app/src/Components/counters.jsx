import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        return (
            <div style = {{ margin: 20}}>
                <button 
                    className="btn btn-primary btn-sm m-2"
                    onClick = {this.props.onReset}
                >
                    Reset
                </button>
                { this.props.counters.map(counter => 
                    <Counter 
                        key={counter.id} 
                        onDelete={this.props.onDelete} 
                        onIncrement = {this.props.onIncrement}
                        counter={counter} />
                )}
            </div>
        );
    }
}
 
export default Counters;
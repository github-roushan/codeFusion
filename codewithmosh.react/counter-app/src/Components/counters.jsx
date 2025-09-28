import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        const {onDelete, onReset, onIncrement, counters} = this.props;
        return (
            <div style = {{ margin: 20}}>
                <button 
                    className="btn btn-primary btn-sm m-2"
                    onClick = {onReset}
                >
                    Reset
                </button>
                { counters.map(counter => 
                    <Counter 
                        key={counter.id} 
                        onDelete={onDelete} 
                        onIncrement = {onIncrement}
                        counter={counter} />
                )}
            </div>
        );
    }
}
 
export default Counters;
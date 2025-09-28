import React, { Component } from 'react';
import NavBar from './Components/navbar';
import Counters from './Components/counters';

class App extends Component {
    state = { 
        counters: [
            { id:1, value:0 },
            { id:2, value:0 },
            { id:3, value:0 },
            { id:4, value:0 },
            { id:5, value:0 },
        ] 
    }; 

    handleDelete = (counterId) => {
        const newCounters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters: newCounters})
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        if(index === -1) return;
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({ counters })   
    }

    handleDecrement = (counter) => {
        const counters = [...this.state.counters]; // shallow copy
        const index = counters.indexOf(counter);
        if(index === -1) return -1;
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({ counters })
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    }

    render() {
        return (
            <React.Fragment>
            <NavBar totalCounters={this.state.counters.length}/>
            <main className="container">
                <Counters
                    counters = {this.state.counters}
                    onReset = {this.handleReset}
                    onIncrement = {this.handleIncrement}
                    onDelete = {this.handleDelete}
                    onDecrement = {this.handleDecrement}
                />
            </main>
            </React.Fragment>
        );
    }
}
 
export default App;
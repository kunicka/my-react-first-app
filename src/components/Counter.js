import React, {Component} from 'react';

class Counter extends Component(){
    constructor(props) {
        super(props);
    
        this.state = {
             count: 0
        }
    }


    increment() {
        this.setState(
            {
            count: this.state.count+1
        }, console.log("hg"));
    }

    render() {
        return(
            <div>
                <h2>count - {this.state.count}</h2>
                <button onClick={()=>this.increment()}></button>
            </div>
        )
    }
}

export default Counter
import React from "react";

class PropsPlayground2 extends React.Component {

    constructor(){
        super();
        this.state = {
            message: "Welcome visitor",
        }
    }

    changeMessage(){
        this.setState({
            message: "GoodBuy visitor"
        })
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>change the message</button>
            </div>
            

        )
    }
}

export default PropsPlayground2
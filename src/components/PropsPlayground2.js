import React from "react";

class PropsPlayground2 extends React.Component {

    constructor(){
        super();
        this.state = {
            message: "Polajkuj jeśli Ci się podoba.",
        }
    }

    changeMessage(){
        this.setState({
            message: "Dzięki za polajkowanie!"
        })
    }
    
    render(){
        return(
            <div>
                <h3>{this.state.message}
                <br/>
                <button onClick={()=> this.changeMessage()}>LIKE</button>
                </h3>
            </div>
            

        )
    }
}

export default PropsPlayground2
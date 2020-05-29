import React from "react";




class StatePlayground extends React.Component {
    constructor(){
        super();
        this.state={
            name: "Agnieszka",
            surname: "Kunicka",
            age: 28,
            logged: true,
            count: 0,
            count2: 0,
            
        }
        this.addByClick = this.addByClick.bind(this);
        this.substractByClick = this.substractByClick.bind(this);
        
    }

    

    addByClick() {
        this.setState(prevState=> {
            return {
                
                count: prevState.count+5,
            }
        })
    }

    substractByClick() {
        this.setState(prevState=> {
            return {
                
                count: prevState.count-5
                
            }
        })
    }

        render() {
            return (
                <div>
                    {/* <h3>Mam na imię {this.state.name} {this.state.surname}  
                      i mam {this.state.age} lat. 
                     Jestem {this.state.logged ? "zalogowana" : "niezalogowana"}</h3> */}
                     <h2>BREAK COUNTER</h2>
                     <div className="todo-list">
                     <h3>Miałaś już dzisiaj <div className="biggerFontPlease"> {this.state.count}</div> minut przerwy.</h3>
                     <button onClick={this.addByClick}>Dodaj</button>
                     <button onClick={this.substractByClick}>Odejmij</button>
                     </div>
                </div>
            )
        }
    }


export default StatePlayground
import React from "react";

class TickingClock extends React.Component {
  
    constructor(props) {
    super(props);
    this.state = {date: new Date(),
    };
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="ticking-clock">
        <h4>
          GODZINA: {this.state.date.toLocaleTimeString()} DATA:
          {this.state.date.toDateString()}
        </h4>
      </div>
    );
  }
}

export default TickingClock;

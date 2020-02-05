import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    
    super(props);
    this.state = {
      counter: 0,    }
  }

  componentDidMount() {
this.counter = setInterval(() => this.setState({
  counter: this.state.counter + 1    
}), 1000);
            // this.timer = setInterval(
            // () => this.setState(prevState => ({ 
            //   counter: !prevState.counter
            // })),
            // 5000,
    // ...
  }

  componentWillUnmount() {
      clearInterval(this.counter);
  }
  
  render () {
    return (
      <div data-testid="timer">
        {this.state.counter}
      </div>
    );
  }
}

export default Timer;


import React from "react";
import user from '../user';

class Body extends React.Component {


  constructor(props) {
    super(props);
    // ...
    
  }

  handleClick() {
    // ...

  }

  render() {
    return (
		<a href="#" data-testid="testBtn" className="btn btn-primary my-3" onClick={this.handleClick}>Plus d'informations</a>
      )
  }

}


export default Body;

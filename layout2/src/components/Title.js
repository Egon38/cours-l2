import React from "react";
import user from '../user';

class Title extends React.Component {


  constructor(props) {
    super(props);
    // ...
  }

  handleClick() {
    // ...

  }

  render() {
    return (
        <div className="card-header">
          Bonjour {user.results[0].name.first}, voici vos informations
        </div>
      )
  }

}


export default Title;

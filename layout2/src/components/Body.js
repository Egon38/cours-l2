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
              <ul className="list-group list-group-flush">
                  <li className="list-group-item">Vous êtes {user.results[0].name.title} {user.results[0].name.first} {user.results[0].name.last} </li>
                  <li className="list-group-item">Vous avez {user.results[0].dob.age} ans et habitez en {user.results[0].location.country} </li>

              </ul>
      )
  }

}


export default Body;

import React from 'react';
import logo from './logo.svg';
import user from './user';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Title from './components/Title';
import Body from './components/Body';
import BtnInfo from './components/BtnInfo';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="card m-5">
              <img className="card-img-top" src={user.results[0].picture.medium} alt="Card image cap" />
              <div className="card-body p-0">

                <Title></Title>
                <Body></Body>
                <BtnInfo></BtnInfo>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

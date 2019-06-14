import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  withRouter
} from 'react-router-dom';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.apiUrl = 'http://localhost:3333/smurfs';
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get(this.apiUrl)
      .then(res => this.setState({ smurfs: res.data }))
      .catch(err => console.log(err));
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className='App'>
        <nav>
          <h1>Smurf Village</h1>
          <NavLink exact to='/'>
            Home
          </NavLink>
          <NavLink exact to='/smurf-form'>
            Add Smurf
          </NavLink>
        </nav>

        <Route
          exact
          path='/'
          render={props => <Smurfs smurfs={this.state.smurfs} />}
        />
        <Route exact path='/smurf-form' component={SmurfForm} />
      </div>
    );
  }
}

export default App;

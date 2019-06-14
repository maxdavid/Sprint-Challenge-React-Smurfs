import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import smurfImg from './assets/smurf.png';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

import './App.scss';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import SmurfNav from './components/SmurfNav';

const AppContainer = styled.div`
  width: 100%;
  height: 80%;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(${smurfImg}) bottom left no-repeat;
`;

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

  addSmurf = smurf => {
    axios
      .post(this.apiUrl, smurf)
      .then(res => {
        this.setState({ smurfs: res.data });
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <AppContainer>
        <SmurfNav />
        <MainContainer>
          <Route
            exact
            path='/'
            render={props => <Smurfs smurfs={this.state.smurfs} />}
          />
          <Route
            exact
            path='/smurf-form'
            render={props => <SmurfForm addSmurf={this.addSmurf} />}
          />
        </MainContainer>
      </AppContainer>
    );
  }
}

export default withRouter(App);

import React, { Component } from 'react';
import styled from 'styled-components';

import Smurf from './Smurf';

const SmurfList = styled.div`
  width: 800px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

class Smurfs extends Component {
  render() {
    return (
      <SmurfList>
        {this.props.smurfs.map(smurf => {
          return (
            <Smurf
              name={smurf.name}
              id={smurf.id}
              age={smurf.age}
              height={smurf.height}
              key={smurf.id}
            />
          );
        })}
      </SmurfList>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;

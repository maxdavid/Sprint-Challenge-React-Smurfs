import React from 'react';
import styled from 'styled-components';

const SmurfContainer = styled.div`
  width: 350px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  padding: 20px;
  background-color: #fffffff8;

  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const SmurfName = styled.h3`
  @import url('https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap');
  font-family: 'Luckiest Guy', cursive;
  font-size: 36px;
`;

const SmurfInfo = styled.ul`
  padding-left: 10px;
  color: #666;
  @import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates:400&display=swap');
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 400;

  li {
    margin-top: 10px;
  }
`;

const Smurf = props => {
  return (
    <SmurfContainer>
      <SmurfName>{props.name}</SmurfName>
      <SmurfInfo>
        <li>{props.height} tall</li>
        <li>{props.age} smurf years old</li>
      </SmurfInfo>
    </SmurfContainer>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

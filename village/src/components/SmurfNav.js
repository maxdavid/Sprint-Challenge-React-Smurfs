import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const TopBar = styled.nav`
  width: 100%;
  height: 80px;
  padding: 20px 10px;
  background-color: #588cc2;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Headline = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Luckiest+Guy&display=swap');
  font-family: 'Luckiest Guy', cursive;
  font-size: 48px;
`;

const NavLinks = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 600px;
  align-items: center;

  @import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,500,700&display=swap');
  font-family: 'Montserrat Alternates', sans-serif;
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
  outline: none;

  &:hover {
    opacity: 0.7;
  }
  &.active {
    font-weight: 700;
  }
`;

export default class SmurfNav extends Component {
  render() {
    return (
      <TopBar>
        <Headline>Smurf Village</Headline>
        <NavLinks>
          <StyledLink exact to='/'>
            Home
          </StyledLink>
          <StyledLink exact to='/smurf-form'>
            Add Smurf
          </StyledLink>
        </NavLinks>
      </TopBar>
    );
  }
}

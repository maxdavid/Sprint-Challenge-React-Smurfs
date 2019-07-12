import React, { Component } from 'react';
import styled from 'styled-components';

const InputForm = styled.form`
  width: 200px;
  height: 180px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  input {
    padding: 5px;
    width: 100%;
  }

  button {
    @import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates:400,500,700&display=swap');
    font-family: 'Montserrat Alternates', sans-serif;
    padding: 10px 15px;
    border-radius: 3px;
    background-color: #588cc2;
    color: white;
  }
`;

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      age: '',
      height: ''
    };
  }

  handleInputChange = e => {
    let value = e.target.value;
    if (value && e.target.name === 'age') value = parseInt(value, 10);

    this.setState({ [e.target.name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ id: Date.now() });
    this.props.addSmurf(this.state);
    this.setState({
      id: 0,
      name: '',
      age: '',
      height: ''
    });
  };

  render() {
    return (
      <div className='SmurfForm'>
        <InputForm onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder='name'
            value={this.state.name}
            name='name'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='age'
            value={this.state.age}
            name='age'
          />
          <input
            onChange={this.handleInputChange}
            placeholder='height'
            value={this.state.height}
            name='height'
          />
          <button type='submit'>Add to the village</button>
        </InputForm>
      </div>
    );
  }
}

export default SmurfForm;

import React, { Component } from 'react';
import axios from 'axios';

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

  addSmurf = event => {
    event.preventDefault();

    this.setState({ id: Date.now() });
    axios.post('http://localhost:3333/smurfs', this.state);

    this.setState({
      id: 0,
      name: '',
      age: '',
      height: ''
    });
  };

  handleInputChange = e => {
    let value = e.target.value;
    if (value && e.target.name === 'age') value = parseInt(value, 10);

    this.setState({ [e.target.name]: value });
  };

  render() {
    return (
      <div className='SmurfForm'>
        <form onSubmit={this.addSmurf}>
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
        </form>
      </div>
    );
  }
}

export default SmurfForm;

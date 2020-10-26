import React from 'react';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
import axios from 'axios';

const fakeSimpson = [
  {
    image:
      'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629',
    character: 'Homer Simpson',
    quote: 'I love donuts',
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpson: fakeSimpson,
    };
    this.getSimpson = this.getSimpson.bind(this);
  }

  getSimpson() {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        this.setState({
          simpson: data[0],
        });
      });
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <QuoteCard simpson={this.state.simpson} />
        <button type='button' onClick={this.getSimpson}>
          Get simpson
        </button>
      </div>
    );
  }
}

export default App;

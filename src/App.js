import React, { Component } from 'react';
import Options from './Components/Options';
import Hardware from './Components/Hardware';
import Total from './Components/Total';
import SummaryMake from './Components/SummaryMake';
import Features from './Components/Features';


// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  // UPDATE CART
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  //RENDER CART
  render() {
    

    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature;
      const selectedOption = this.state.selected[feature];

      return (

        <SummaryMake
        USD = {USCurrencyFormat}
        featureHash = {featureHash}
        selectedOption = {selectedOption}
        
        />
      )
    });

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
            <Features
            features={this.props.features}
            USD = {USCurrencyFormat}
            stateSelected= {this.state.selected}
            />
          </form>
          <section className="main__summary">
            <h2>Your cart</h2>
            
            {summary}
            
            <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                <Total 
                Total={this.state.selected}
                USD = {USCurrencyFormat}
                
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;

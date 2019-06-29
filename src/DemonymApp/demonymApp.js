import React, { Component } from 'react';
import './demonymApp.css'

import Demonym from './demonym';
import CountrySelector from './countrySelector';


class DemonymApp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selected: null
    };
  }

  componentDidMount() {
    fetch('https://country.register.gov.uk/records.json?page-size=5000')
      .then(response => {
        //check if response is ok
        console.log('about to check for errors')
        if(!response.ok) {
          console.log('an error occured, lets throw and error')
          throw new Error('something went wrong');
        }
        return response;
      })
      .then(response => response.json())
      .then(data => {
        const countries = Object.keys(data)
              .map(key => data[key].item[0]);
        this.setState({
          countries
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  setSelected(selected) {
    this.setState({
      selected
    });
  }

  render() {
    const error = this.state.error
    ? <div className="demonym_app__error">{this.state.error}</div>
    : "";

    const demon = this.state.selected
      ? <Demonym name={this.state.selected['citizen-names']} country={this.state.selected.name}/>
      : <div className="demonym_app__placeholder">Select a country above</div>;

    return (
      <div className="demonym_app">
        {error}
        <CountrySelector 
          countries={this.state.countries}
          changeHandler={selected => this.setSelected(selected)}/>
        {demon}
      </div>
    );
  }
}

export default DemonymApp;
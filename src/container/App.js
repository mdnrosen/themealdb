import React, { Component } from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import Main from '../components/Main';
import Entertainment from '../components/Entertainment';
import Technology from '../components/Technology';
import axios from 'axios';

class App extends Component {
  constructor () {
    super ()
    this.state = {
      recipes: [],
    }
  }

  componentDidMount () {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => {
        const meals = res.data.meals
        this.setState({ recipes: meals })
      })

  }
  render () {

    

    return (
      <div className="app">
        <NavBar />
        <Main recipes={this.state.recipes} />
        <Entertainment />
        <Technology />

      </div>
    )
  }
}

export default App;

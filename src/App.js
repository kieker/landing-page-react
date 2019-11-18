import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import Weather from './components/Weather';
class App extends React.Component
{
  weatherShouldUpdate = (weatherString) => {
    let updatedTime = new Date(weatherString)
    let currentTime = new Date()
    console.log(currentTime)
    console.log(updatedTime)
    if (updatedTime < currentTime)
      return true
    else return false
  } 
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <Clock></Clock>
        <Weather weathercheck={this.weatherShouldUpdate}></Weather>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
    )
  }
}
export default App;

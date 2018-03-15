import React, { Component } from 'react';
import Stations from '../containers/Stations'
import MeasureStationsList from './MeasureStationsList';

class App extends Component {

  measureNameToOption = (option) => {
    switch (option) {
      case 'winddir':
        return 'Kierunek wiatru'
      case 'windlevel':
        return 'Siła wiatru'
      case 'water':
        return 'Poziom wody'
      case 'rain':
        return 'Deszcz'
      default:
        return "Nieznana";
    }
  }

  render() {
    return (
      <div className="container">
        <Stations>
          <MeasureStationsList />
        </Stations>
      </div>
    );
  }
}

export default App;

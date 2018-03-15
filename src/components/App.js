import React, { Component } from 'react';
import Stations from '../containers/Stations'
import MeasureStationsList from './MeasureStationsList';

class App extends Component {
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

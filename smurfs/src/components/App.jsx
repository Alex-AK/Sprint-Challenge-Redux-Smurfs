import React, { Component } from 'react';
import './App.css';

import SmurfListView from '../views/SmurfListView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfListView />
      </div>
    );
  }
}

export default App;

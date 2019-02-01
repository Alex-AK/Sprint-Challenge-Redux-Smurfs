import React, { Component } from 'react';
import './App.css';

import SmurfListView from '../views/SmurfListView';
import SmurfFormView from '../views/SmurfFormView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfFormView />
        <SmurfListView />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import CreateServer from './components/CreateServer';
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', margin: 'auto 30px' }} className="App">
        <h1>Server Testing Viewer</h1>
        <CreateServer />
        <Table />
      </div>
    );
  }
}

export default App;

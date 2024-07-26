import React from 'react';
import menus from './data'; // Assuming './data' is correctly providing the 'menus' array
import List from './List';
import './App.css';

function App() {
  return (
    <div className="App">
      <List list={menus} />
    </div>
  );
}

export default App;

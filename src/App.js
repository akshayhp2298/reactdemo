import React from 'react';
import Header from './Component/Header'
import HOC from './Component/HOC'

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HOC tabIndex={0}/>
    </div>
  );
}

export default App;

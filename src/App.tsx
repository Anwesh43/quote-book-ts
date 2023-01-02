import React from 'react';
import logo from './logo.svg';
import './App.css';
import DimensionProvider from './providers/DimensionProvider';
import Loader from './components/Loader';

function App() {
  return (
    <div className="App">
      <DimensionProvider>
        <Loader x = {300} y = {300} ></Loader>
      </DimensionProvider>
    </div>
  );
}

export default App;

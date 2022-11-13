import React from 'react';
import './App.css';
import './styles/style.css'
import { Router } from './components/Routes';
import { Navbar } from './components/public/Navbar';

function App() {
  return (
    <div className="App">
    {/** Navbar */}
      <Navbar />
    {/**container */}
    <Router />
    </div>
  );
}

export default App;

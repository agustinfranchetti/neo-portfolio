import './App.css';
import React from 'react';
import Profile from './PortfolioContainer/Home/Profile'
import HeaderImage from './PortfolioContainer/HeaderImage/HeaderImage'

function App() {
  return (
    <div className='header-image'>
     <HeaderImage/>
    <div className="App">
     <Profile/>
    </div>
    </div>
  );
}

export default App;

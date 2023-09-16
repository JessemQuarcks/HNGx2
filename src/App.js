import React from 'react';
import './App.css';
import Headline from './Components/Headline/headline';
import Navbar from './Components/Navbar/Navbar';
import Row from './Components/Rows/Row'
import request from './request';


function App() {
  return (
    <div className="App">
    <Headline/>
     <Navbar/>
     <Row title="Featured Movies" fetchURL={request.fetchFeaturedMovie}/> 
    </div>
  );
}

export default App;

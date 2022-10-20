import './App.css';

// import Button from '@mui/material/Button'
// import the component we want and use it - check documentation for what's available

import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Header from './Header';
import Card from './Card';
import {Routes, Route} from 'react-router-dom';
import Woman from './Woman.js';


function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      return setData(data);
    })
    .catch(err => console.log(err));
  }, [])

// pass data to both men and women cards - inside those components filter and pass the new results into the map method
  return (
    <div className="App">
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Card data={data} ></Card>} ></Route>
          <Route path="/woman" element={<Woman data={data} />}></Route>
        </Routes>



      </Container>
      
    </div>
  );
}

export default App;

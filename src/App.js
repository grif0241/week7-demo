import './App.css';

// import Button from '@mui/material/Button'
// import the component we want and use it - check documentation for what's available

import React, {useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Header from './Header';
import Card from './Card';


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


  return (
    <div className="App">
      <Container>
        <Header />
        <Card data={data} />

      </Container>
      
    </div>
  );
}

export default App;

import React from 'react';
import Button from '@mui/material/Button';
import {NavLink} from 'react-router-dom';

function Header() {
  // assign the NavLink component to the button
  return (
    <header>
    <h1>My Store</h1>
    <Button component={NavLink} to="/" >Men</Button>
    <Button component={NavLink} to="/woman" >Women</Button>

    </header>
  )
}

export default Header;
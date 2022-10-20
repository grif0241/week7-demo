import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

function Woman( {data} ) {
  if(data.length === 0) { // .length can only check the length of an empty array; so when setting the state variable it must be empty array
    return null // return nothing if no data
  } else {

    let result = data.filter((object)=>{
      return object.category === "women's clothing"
    })

    return (
      <Grid container spacing={2}>
        {result.map((item, index) => (
          // responsive sizing 1col / 2col / 3 col / 4 col
          <Grid item xs={12} sm={6} md={4} key={item.id}> 
            <Paper elevation={3} className="paper">
              <img className="image" src={item.image} alt={item.title}></img>
              <Rating name="disabled" value={item.rating.rate} disabled />
              <Typography variant="body1" gutterBottom> {item.title} </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    );
  }


}

export default Woman;
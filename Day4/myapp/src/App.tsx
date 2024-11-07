import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import Products from './Components/Products/Products';
import Grid from '@mui/material/Grid2';


function App() {
  return (
    <div className="App">
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid size={6}>
        <img src={logo} className="App-logo" alt="logo" />
        
        </Grid>
        <Grid size={6}>
        <section>
         
          <Products />
          </section>
        </Grid>
      
      </Grid>
    </Box>

    </div>
  );
}

export default App;

import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import treatement from '../../../images/treatment.png'
import { Button, Typography } from '@mui/material';
const Exceptional = () => {
    return (
        <Box  sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
           <img style={ {width: 400, marginTop: '50px'}} src={treatement} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{ 
            display: 'flex', 
            justifyContent: 'flex',
            alignItems: 'center',
            textAlign: 'auto ',
            margin: 'auto',

             }}>
            <Box>
            <Typography variant='h4' sx={{mb: 5}} style={{color: 'black', fontWeight: 600}}>
                Exceptional Dental <br />
                Care, On Your Terms
            </Typography>
            <Typography variant='h6'  sx={{mb: 5}}  style={{color: 'secondary', fontSize: 14, fontWeight: 300}}>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, ipsa possimus ex cumque ad est minus, dolorum esse rerum inventore dolorem, nesciunt optio itaque culpa similique iusto sed! Sequi, quos!
            </Typography>
            <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>Learn More</Button>
            </Box>
          </Grid>
          
          
        </Grid>
      </Box>
    );
};

export default Exceptional;
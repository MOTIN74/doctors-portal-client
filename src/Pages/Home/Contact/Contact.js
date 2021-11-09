import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../../images/appointment-bg.png'
import { Button, TextField, Typography } from '@mui/material';

const contactBanner = {
  background: `url(${bg})`,
  marginTop: 130,
  backgroundColor: 'rgba(45, 58, 74, 0.9)',
  backgroundBlendMode: 'darken, luminosity',
  width: '90%',
  marginLeft: 80
}

const Contact = () => {

    const handleBookingSubmit = e => {
        alert('submitted')
        
        // collect data sent to server
        e.preventDefault()
    }
    return (
        
            <Box style={contactBanner}>
        <Grid container spacing={1}>
          
          <Grid item xs={12}  sx={{ 
            // display: 'flex', 
            // justifyContent: 'center',
            // alignItems: 'center',
            // textAlign: 'center ',

             }}>
            <Box  >
            <Typography variant='h6' sx={{mb: 5}} style={{color: '#5CE7ED'}}>
              CONTACT US
            </Typography>
            <Typography variant='h4' sx={{my: 5}}  style={{color:'white'}}>
               Alaways Connect With Us
            </Typography>
            <form  onSubmit={handleBookingSubmit}>
          <TextField
          
          sx={{width: '50%',background:'white', m:1}}
         
          id="outlined-size-small"
          placeholder='Your Name'
          size="small"
        />
          <TextField
          
          sx={{width: '50%',background:'white', m:1}}
        
          id="outlined-size-small"
          placeholder="Your Address"
          size="small"
        />
          <TextField
          
          sx={{width: '50%',background:'white', m:1}}
          
          id="outlined-size-small"
          placeholder="Your Email"
          size="small"
        />
          <TextField
          
          sx={{width: '50%',background:'white', m:1}}
          
          id="outlined-size-small"
          placeholder="Your Phone Number"
          size="small"
        />
         
          <TextField 
         
          sx={{width: '50%',background:'white' , m:1}}
         
          id="outlined-size-small"
          placeholder= "Message"
          size="small"
        /> <br />
        <Button sx={{m: 2}}   type="submit" variant="contained">SUBMIT</Button>
         
          </form>
            </Box>
          </Grid>
          
          
        </Grid>
      </Box>
      
    );
};

export default Contact;
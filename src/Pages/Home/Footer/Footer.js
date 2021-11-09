import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Typography } from '@mui/material';
const Footer = () => {
    return (
        <Box  sx={{ flexGrow: 1,mt: 3 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={3}>
        <Box>
        <Typography sx={{mt: 5}} variant="body2" color="text.secondary">
                Emergency Dental Care <br />
                Cheek Up <br />
                Personal Diageses <br />
                Cheek Up <br />
                Tooth Extraction
                
            </Typography>
        </Box>
          </Grid>
          <Grid item xs={12} md={3}>
          <Box>
          <Typography variant='h4' sx={{mt: 5}} style={{color: '#5CE7ED', fontWeight: 600}}>
                Services 
                
            </Typography>
        <Typography sx={{mt: 1}} variant="body2" color="text.secondary">
                Emergency Dental Care <br />
                Cheek Up <br />
                Personal Diageses <br />
                Cheek Up <br />
                Tooth Extraction
                
            </Typography>
        </Box>
          </Grid>
          <Grid item xs={12} md={3}>
          <Box>
          <Typography variant='h4' sx={{mt: 5}} style={{color: '#5CE7ED', fontWeight: 600}}>
                Oral Health
                
            </Typography>
        <Typography sx={{mt: 1}} variant="body2" color="text.secondary">
                Emergency Dental Care <br />
                Cheek Up <br />
                Personal Diageses <br />
                Cheek Up <br />
                Tooth Extraction
                
            </Typography>
        </Box>
          </Grid>
          <Grid item xs={12} md={3}>
          <Box>
          <Typography variant='h4' sx={{mt: 5}} style={{color: '#5CE7ED', fontWeight: 600}}>
                Our Address
                
            </Typography>
        <Typography sx={{mt: 1}} variant="body2" color="text.secondary">
                New York-1010 Hudson <br /> Yards <br />  
                <Box style={{color: '#5CE7ED',m:1 , fontWeight: 600}}>
                <FacebookIcon/>
                  <GoogleIcon/>
                  <TwitterIcon/>
                </Box>
            </Typography>
            <Typography variant='h4'  sx={{mt: 4}}  style={{color: 'secondary', fontSize: 14, fontWeight: 400}}>
            Call Now
            </Typography>
            <Button variant="contained" style={{backgroundColor: '#5CE7ED', mt: 3}}>0123456789</Button>

        </Box>
          </Grid>
          </Grid>
          <h5 sx= {{color:"text.secondary"}}>&copy; Copyright 2021 All Rights Reserved. BY KHAN</h5>
      </Box>
    );
};

export default Footer;

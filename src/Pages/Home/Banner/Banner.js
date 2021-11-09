import React from 'react';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography , Container} from '@mui/material';


const bannerBg = {
    background: `url(${bg})`,
   
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    
    height: 400
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid  item style={{...verticalCenter,textAlign: "left"}} xs={12} md={4}>
      <Box>
      <Typography variant="h3">
            Your Now Smile <br />
            Starts Here

        </Typography>
        <Typography variant="h6" sx={{my: 3, fontSize: 14, fontWeight: 300, color: 'gray'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet id accusantium amet nobis saepe reiciendis velit ratione ut ipsam commodi!
        </Typography>
        <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>GET APPOINTMENT</Button>
      </Box>
        </Grid>
        <Box sx={{ backgroundColor: 'rgba(45, 58, 74, 0.9)',
  backgroundBlendMode: 'darken, luminosity', width: '55%', height:'500px',marginLeft:'100px',mt:5
  }}>
        <Grid item xs={12} md={8} style={verticalCenter}  >

        <img style={ {width: 500, marginLeft:'-90px'}} src={chair} alt="" />
        </Grid>
        </Box>
        
        
      </Grid>
    </Container>
    );
};

export default Banner;
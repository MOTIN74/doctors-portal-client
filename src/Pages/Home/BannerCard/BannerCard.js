import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RoomIcon from '@mui/icons-material/Room';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import {  Typography } from '@mui/material';



const BannerCard = () => {
    return (
        <Box  sx={{ flexGrow: 1,mt: '-70px', mb:3 , width: '80%', marginLeft: '90px' }}>
        <Grid container spacing={1}>
        <Grid item xs={6} md={4}>
          <Box style={{display: 'flex', backgroundColor:'#03a9f4', borderRadius:'10px'}}>
          <Typography variant='h4' sx={{m:3}} style={{color: 'white', fontWeight: 800}}>
          <AccessTimeIcon sx={{ fontSize: 80 }}/>
                
            </Typography>
        <Typography sx={{mt: 1}} variant="body2" color="text.white">
               <h3 > Opening Hours</h3>
               <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! </h5>
                
            </Typography>
        </Box>
          </Grid>
          <Grid item xs={6} md={4}>
          <Box style={{display: 'flex', backgroundColor:'#263238', borderRadius:'10px'}}>
          <Typography variant='h4' sx={{m:3}} style={{color: 'white', fontWeight: 800}}>
          <RoomIcon sx={{ fontSize: 80 }}/>
                
            </Typography>
        <Typography sx={{mt: 1}} variant="body2" color="text.white">
               <h3 > Opening Hours</h3>
               <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! </h5>
                
            </Typography>
        </Box>
          </Grid>
          <Grid item xs={6} md={4}>
          <Box style={{display: 'flex', backgroundColor:'#03a9f4', borderRadius:'10px'}}>
          <Typography variant='h4' sx={{m:3}} style={{color: 'white', fontWeight: 800}}>
          <AddIcCallIcon sx={{ fontSize: 80 }}/>
                
            </Typography>
        <Typography sx={{mt: 1}} variant="body2" color="text.white">
               <h3 > Opening Hours</h3>
               <h5> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! </h5>
                
            </Typography>
        </Box>
          </Grid>
          
          </Grid>
          
      </Box>
    );
};

export default BannerCard;
import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
const Patient = (props) => {
    const {name, description, img, address} = props.patient;
    return (
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
        <Typography style={{mb: 3}} variant="body2" color="text.secondary">
                  {description}
                  
                </Typography>
                <Card sx={{ display: 'flex', mt: 5 }}>
                <CardMedia
                component="img"
                style={{ width: 'auto', height: '80px', margin:'0 auto'}}
                image={img}
                alt="green iguana"
              />
              <CardContent sx={{marginLeft: '-50px'}}>
              
                <Typography sx={{marginLeft: '-10px'}} variant="h5" color="info.main" component="div">
                  {name}
                </Typography>
                
                
                <Typography sx={{marginLeft: '-30px'}} variant="body2" color="text.secondary">
                  {address}
                  
                </Typography>
              </CardContent>
                </Card>
              
            </Card>
                </Grid>
    );
};

export default Patient;
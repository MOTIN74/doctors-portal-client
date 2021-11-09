import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import MdPhone from '@mui/icons-material/Phone';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
const Doctor = (props) => {
    const {name, cell, img} = props.doctor;
    return (
        <Grid item xs={4} sm={4} md={4}>
<Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
<CardMedia
        component="img"
        style={{ width: 'auto', height: '80px', margin:'0 auto'}}
        image={img}
        alt="green iguana"
      />
      <CardContent>
      
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        
        <Typography style={{color: 'secondery'}} variant="body2" ><Chip icon={< MdPhone />}  />
          {cell}
          
        </Typography>
      </CardContent>
      
    </Card>
        </Grid>
    );
};

export default Doctor;
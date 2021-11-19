import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import AOS from 'aos'
import 'aos/dist/aos.css'
import  {useEffect} from 'react'
import Typography from '@mui/material/Typography';


const Service = (props) => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 2000,
      easing: 'ease-in-sine',
    })
  }, [])
    const {name, description, img} = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
<Card sx={{ minWidth: 275, border: 0, boxShadow: 0, mt: 5 }}>
<CardMedia
      data-aos="fade-right"
        component="img"
        style={{ width: 'auto', height: '80px', margin:'0 auto'}}
        image={img}
        alt="green iguana"
      />
      <CardContent data-aos="fade-right">
      
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        
        <Typography variant="body2" color="text.secondary">
          {description}
          
        </Typography>
      </CardContent>
      
    </Card>
        </Grid>
    );
};

export default Service;
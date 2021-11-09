import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';

import doctors1 from '../../../images/doctors1.png'
import doctors2 from '../../../images/doctors2.png'
import doctors3 from '../../../images/doctors3.png'
import Doctor from '../Doctor/Doctor';

const doctors = [
    {
        name: 'DR. RAMA ',
        cell: '123456789',
        img: doctors1
    },
    {
        name: 'DR. RIYON ',
        cell: '123456789',
        img: doctors2
    },
    {
        name: 'DR. RISHA ',
        cell: '123456789',
        img: doctors3
    }
]


const Doctors = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1, m: 5 }}>
      <Container>
      <Typography sx={{fontWeight: 500, color: 'info.main' }}  variant="h6" component="div">
        OUR DOCTORS
        </Typography>
      
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       {
           doctors.map(doctor => <Doctor
           key={doctor.name}
           doctor={doctor}
           ></Doctor> )
       }
      </Grid>
      </Container>
    </Box>
        </div>
    );
};

export default Doctors;
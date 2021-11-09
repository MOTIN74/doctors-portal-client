import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import img1 from '../../../images/img1.png'
import img2 from '../../../images/img2.png'
import img3 from '../../../images/img3.png'
import Patient from '../Patient/Patient';


const patients = [
    {
        name: 'wilson Herry',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        address: 'California',
        img: img1
    },
    {
        name: 'Herry',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        address: 'California',
        img: img2
    },
    {
        name: 'Tom',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed culpa cumque enim! Voluptatibus aliquid expedita saepe accusantium itaque ducimus rem voluptas',
        address: 'California',
        img: img3
    }
]

const Patients = () => {
    return (
        <div>
        <Box sx={{ flexGrow: 1 }}>
  <Container>
  <Typography sx={{fontWeight: 500, color: 'info.main', textAlign: 'left', m: 3 }}  variant="h6" component="div">
    TESTMONIAL
    </Typography>
  <Typography sx={{fontWeight: 600, m: 2,textAlign: 'left' }}  variant="h4" component="div">
   What's Our Patients <br /> Says
    </Typography>
  <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
   {
       patients.map(patient => <Patient
       key={patient.name}
       patient={patient}
       ></Patient> )
   }
  </Grid>
  </Container>
</Box>
    </div>
    );
};

export default Patients;
import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import Dactor from '../Dactor/Dactor';


const Dactors = () => {
    const [dactors, setDactors] = useState([]);

    useEffect(() => {
        fetch(' https://afternoon-plateau-78667.herokuapp.com/dactors')
        .then(res => res.json())
        .then(data => setDactors(data))
}, [])

return (
    <div>
        <h2>Our Doctors: {dactors.length}</h2>
        <Container>
            <Grid container spacing={2}>
                {
                    dactors.map(dactor => <Dactor
                        key={dactor._id}
                        dactor={dactor}
                    ></Dactor>)
                }
            </Grid>
        </Container>
    </div>
);
};

export default Dactors;
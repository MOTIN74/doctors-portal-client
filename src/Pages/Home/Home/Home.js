
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Exceptional from '../Exceptional/Exceptional';
import Patients from '../Patients/Patients';
import Doctors from '../Doctors/Doctors';

import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import BannerCard from '../BannerCard/BannerCard';
import Dactors from '../Dactors/Dactors';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <BannerCard></BannerCard>
            <Services></Services>
            <Exceptional></Exceptional>
            <AppointmentBanner></AppointmentBanner>
            <Dactors></Dactors>
            <Patients></Patients>
            <Doctors></Doctors>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;
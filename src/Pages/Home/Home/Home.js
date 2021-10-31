import React from 'react';
import { Spinner } from 'react-bootstrap';
import useService from '../../../hooks/useServices';
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
  const {services} = useService();
    if (services.length < 1 ) {
        return <div className="spinner"><Spinner animation="border" variant="danger"/></div>
    }
    return (
        <div >
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;
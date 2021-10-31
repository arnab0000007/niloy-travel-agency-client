import React from 'react';
import { Spinner } from 'react-bootstrap';
import useService from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const {services} = useService();
    if (services.length < 1 ) {
        return <div className="spinner"><Spinner animation="border" variant="danger"/></div>
    }
    return (
        <div className="container">
            <h2 className="fw-bold my-5">Our services</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;
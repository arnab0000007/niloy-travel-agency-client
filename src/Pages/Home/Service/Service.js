import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { _id, name, price, description, img } = service;
    return (
        <div className="service pb-3">
            <Card className="bg-light shadow-lg pb-3 mb-5 bg-body rounded">
            <img src={img} alt="service" className="img-fluid"/>
            <h3 className="pt-3 fw-bolder">{name}</h3>
            <p className="px-3">{description.slice(0,250)} ... </p>
            <p className="px-3 h3 py-3">{price} TK </p>
            <Link to={`/book/${_id}`}>
                <button className="btn btn-warning btn-sm fw-bold text-secondary">Book Now</button>
            </Link>
            </Card>
        </div>
    );
};

export default Service;
import axios from 'axios';
import React, { createContext, useState, useEffect } from "react";
export const ServiceContext = createContext();
const ServiceProvider = ({ children }) => {

    const [services, setServices] = useState([]);
    useEffect(() => {
     
        axios.get('https://shocking-zombie-48437.herokuapp.com/services')
        .then(res => {
            setServices(res.data)
         })

    }, []);
    return (
        <ServiceContext.Provider value={{ services }}>
            {children}
        </ServiceContext.Provider>
    );
}
export default ServiceProvider;

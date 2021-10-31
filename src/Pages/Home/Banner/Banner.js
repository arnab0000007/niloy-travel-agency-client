import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg';
import banner2 from '../../../images/banner/banner2.jpg';
import banner3 from '../../../images/banner/banner3.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <>
            <Carousel >
                <Carousel.Item className="banner-overlay">
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Live, Travel, Adventure, Bless And </h3>
                        <p>Don't Be Sorry</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner-overlay">
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Live Life With No Excuses </h3>
                        <p>Travel With No Regret.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="banner-overlay">
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Life is Either a Daring Adventure</h3>
                        <p>Or Nothing</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;
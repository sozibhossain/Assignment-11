import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../images/slider/slider1.jpg'
import slider2 from '../../images/slider/slider2.jpg'
import slider3 from '../../images/slider/slider3.jpg'

const Slider = () => {
    return (
        <div>
            <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider2}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>ATRii-WORLD</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider1}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>ATRii-WORLD</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>ATRii-WORLD</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </div>
        </div>
    );
};

export default Slider;
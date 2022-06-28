import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({ start }) => {
    return (
        <Carousel fade>
            {
                start.map((item) => (
                    <Carousel.Item key={item}>
                        <img
                            className="d-block w-100"
                            src={item}
                            alt="First slide"
                        />
                    </Carousel.Item>
                ))
            }

        </Carousel>
    )
}

export default Slider
import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Banner.css'

const Banner = ({ banner }) => {
    return (
        <Carousel>
            {
                banner.map((item) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100 BannerImg"
                            src={item.image}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>{`Source:${item.source}`}</p>
                            <a href={item.more} className="readMore">Read More</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }

        </Carousel>
    )
}

export default Banner
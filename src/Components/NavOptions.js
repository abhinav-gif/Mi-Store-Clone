import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import NavCard from './NavCard';
import '../styles/NavOptions.css'

const NavOptions = ({ category }) => {
    const [Toggle, setToggle] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setToggle(true);
    }, [location]);

    return (
        <div className="navOptions">

            {Toggle ? category.map((item) => (
                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}

        </div>
    )
}

export default NavOptions
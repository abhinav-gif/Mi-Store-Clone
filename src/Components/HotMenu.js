import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/HotMenu.css'

const HotMenu = () => {
    const [music, setmusic] = useState(false);
    const [smartDevice, setsmartDevice] = useState(false);
    const [home, sethome] = useState(false);
    const [lifestyle, setlifestyle] = useState(false);
    const [mobileAccessories, setmobileAccessories] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/") {
            setmusic(true);
            setsmartDevice(false);
            sethome(false);
            setlifestyle(false);
            setmobileAccessories(false);
        }
        if (location.pathname === "/smartDevice") {
            setmusic(false);
            setsmartDevice(true);
            sethome(false);
            setlifestyle(false);
            setmobileAccessories(false);
        }
        if (location.pathname === "/Home") {
            setmusic(false);
            setsmartDevice(false);
            sethome(true);
            setlifestyle(false);
            setmobileAccessories(false);
        }
        if (location.pathname === "/lifeStyle") {
            setmusic(false);
            setsmartDevice(false);
            sethome(false);
            setlifestyle(true);
            setmobileAccessories(false);
        }
        if (location.pathname === "/mobileAccessories") {
            setmusic(false);
            setsmartDevice(false);
            sethome(false);
            setlifestyle(false);
            setmobileAccessories(true);
        }

    }, [location]);
    const styling = {
        "color": "orangered",
        "border-bottom": "1px solid orangered"
    };
    return (
        <div className='HotAccessoriesMenu'>
            {music ? <Link className="HotAccessoriesLink" to="/" style={styling}>Music Store</Link> : <Link className="HotAccessoriesLink" to="/">Music Store</Link>}
            {smartDevice ? <Link className="HotAccessoriesLink" to="/smartDevice" style={styling}>Smart Devices</Link> : <Link className="HotAccessoriesLink" to="/smartDevice">Smart Devices</Link>}
            {home ? <Link className="HotAccessoriesLink" to="/Home" style={styling}>Home</Link> : <Link className="HotAccessoriesLink" to="/Home">Home</Link>}
            {lifestyle ? <Link className="HotAccessoriesLink" to="/mlifeStyle" style={styling}>Lifestyle</Link> : <Link className="HotAccessoriesLink" to="/mlifeStyle">Lifestyle</Link>}
            {mobileAccessories ? <Link className="HotAccessoriesLink" to="/mobileAccessories" style={styling}>Mobile Accessories</Link> : <Link className="HotAccessoriesLink" to="/mobileAccessories">Mobile Accessories</Link>}
        </div>
    )
}

export default HotMenu
import React, { useState, useEffect } from 'react'
//cant import labels directly from json (webpack v5)
import data from "../data/data.json"
import "../styles/NavBar.css"
import { Link, useLocation } from "react-router-dom"

const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" /></svg>

const Navbar = () => {

    const [miPhones, setmiPhones] = useState(false);
    const [redmiphones, setredmiphones] = useState(false);
    const [tv, settv] = useState(false);
    const [laptops, setlaptops] = useState(false);
    const [lifestyle, setlifestyle] = useState(false);
    const [home, sethome] = useState(false);
    const [audio, setaudio] = useState(false);
    const [accessories, setaccessories] = useState(false);

    const styling = { "color": "orangered", "border-bottom": "1px solid orangered", "padding-bottom": "5px" };
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === "/") {
            setmiPhones(true);
            setredmiphones(false);
            settv(false);
            setlaptops(false);
            setlifestyle(false);
            sethome(false);
            setaudio(false);
            setaccessories(false);
        }
        if (location.pathname === "/redmiphones") {
            setmiPhones(false);
            setredmiphones(true);
            settv(false);
            setlaptops(false);
            setlifestyle(false);
            sethome(false);
            setaudio(false);
            setaccessories(false);
        }
        if (location.pathname === "/tv") {
            setmiPhones(false);
            setredmiphones(false);
            settv(true);
            setlaptops(false);
            setlifestyle(false);
            sethome(false);
            setaudio(false);
            setaccessories(false);
        }
        if (location.pathname === "/laptops") {
            setmiPhones(false);
            setredmiphones(false);
            settv(false);
            setlaptops(true);
            setlifestyle(false);
            sethome(false);
            setaudio(false);
            setaccessories(false);
        }
        if (location.pathname === "/lifestyle") {
            setmiPhones(false);
            setredmiphones(false);
            settv(false);
            setlaptops(false);
            setlifestyle(true);
            sethome(false);
            setaudio(false);
            setaccessories(false);
        }
        if (location.pathname === "/home") {
            setmiPhones(false);
            setredmiphones(false);
            settv(false);
            setlaptops(false);
            setlifestyle(false);
            sethome(true);
            setaudio(false);
            setaccessories(false);
        }
        if (location.pathname === "/audio") {
            setmiPhones(false);
            setredmiphones(false);
            settv(false);
            setlaptops(false);
            setlifestyle(false);
            sethome(false);
            setaudio(true);
            setaccessories(false);
        }
        if (location.pathname === "/accessories") {
            setmiPhones(false);
            setredmiphones(false);
            settv(false);
            setlaptops(false);
            setlifestyle(false);
            sethome(false);
            setaudio(false);
            setaccessories(true);
        }
    }, [location]);
    return (
        <div className="nav">
            <div className="logo">
                <a href="/">
                    <img id="logoImage" src={data.logo} alt="Not" />
                </a>
            </div>

            {miPhones ? <Link className="navlinks" to="/" style={styling}>Xiaomi Phones</Link> : <Link className="navlinks" to="/">Xiaomi Phones</Link>}
            {redmiphones ? <Link className="navlinks" to="/redmiphones" style={styling}>Redmi Phones</Link> : <Link className="navlinks" to="/redmiphones">Redmi Phones</Link>}
            {tv ? <Link className="navlinks" to="/tv" style={styling}>TV</Link> : <Link className="navlinks" to="/tv">TV</Link>}
            {laptops ? <Link className="navlinks" to="/laptops" style={styling}>Laptops</Link> : <Link className="navlinks" to="/laptops">Laptops</Link>}
            {lifestyle ? <Link className="navlinks" to="/lifestyle" style={styling}>Fitness & Lifestyle</Link> : <Link className="navlinks" to="/lifestyle">Fitness & Lifestyle</Link>}
            {home ? <Link className="navlinks" to="/home" style={styling}>Home</Link> : <Link className="navlinks" to="/home">Home</Link>}
            {audio ? <Link className="navlinks" to="/audio" style={styling}>Radio</Link> : <Link className="navlinks" to="/audio">Radio</Link>}
            {accessories ? <Link className="navlinks" to="/accessories" style={styling}>Accessories</Link> : <Link className="navlinks" to="/accessories">Accessories</Link>}

            <div className="searchbox">
                <input type="text" name="search" placeholder="Search Products" />
                {searchIcon}
            </div>
        </div>
    )
}

export default Navbar
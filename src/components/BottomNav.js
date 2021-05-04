import React from 'react'
import "../components/Nav.css";
import { NavLink } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { IoPersonOutline } from "react-icons/io5";
import {  IoNewspaperOutline} from "react-icons/io5";
function BottomNav() {
    return (
        <>
        <nav className="navbar fixed-bottom">
        <NavLink exact to="/" className="links"><RiHome2Line className="ico" size={30}/></NavLink>
        <NavLink exact to="/discover" className="links"><IoNewspaperOutline className="ico" size={30}/></NavLink>
        <NavLink exact to="/about" className="links"><IoPersonOutline className="ico" size={30}/></NavLink>
        </nav>
        </>
    )
}

export default BottomNav

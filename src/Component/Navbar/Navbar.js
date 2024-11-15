import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { IoTicketOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { TiLocationOutline } from "react-icons/ti";
import { VscAccount } from "react-icons/vsc";

function Navbar() {
  return (
    <div>
        <nav className="navbar">
      <div className="navbar-logo">
        <h2>Logo</h2>
      </div>
      <ul className="navbar-links">
        <li><Link href="#ticket" className="navbar-item"><IoTicketOutline /><span>Ticket</span></Link></li>
        <li><Link href="#theater" className="navbar-item"><TiLocationOutline /><span>Theaters</span></Link></li>
        <li><Link href="#search" className="navbar-item"><IoIosSearch /><span>Search</span></Link></li>
        <li><Link href="#account" className="navbar-item"><VscAccount /><span>Account</span></Link></li>
        <li><Link href="#account" className="navbar-item"><VscAccount /><span>Log in</span></Link></li>
      </ul>
    </nav>
      
    </div>
  )
}

export default Navbar

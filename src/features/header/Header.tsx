import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

export function Header() {
  return (
    <div className="header">
      <div className="logo"><NavLink to="/">aggmonitor.io</NavLink></div>
      <div className="menuItem"><NavLink to="/about" activeClassName="activeLink">ABOUT</NavLink></div>
      <div className="menuItem"><NavLink to="/resources" activeClassName="activeLink">RESOURCES</NavLink></div>
      <div className="menuItem"><NavLink to="/contact" activeClassName="activeLink">CONTACT</NavLink></div>
    </div>
  )
}
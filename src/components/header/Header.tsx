import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

export function Header() {
  return (
    <div className="header bg-red-600">
      <div className="logo text-2xl font-bold"><NavLink to="/">aggmonitor.io</NavLink></div>
      <div className="menuItem text-lg"><NavLink to="/about" activeClassName="activeLink">ABOUT</NavLink></div>
      <div className="menuItem text-lg"><NavLink to="/resources" activeClassName="activeLink">RESOURCES</NavLink></div>
      <div className="menuItem text-lg"><NavLink to="/contact" activeClassName="activeLink">CONTACT</NavLink></div>
    </div>
  )
}
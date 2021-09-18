import React from "react";
import './Header.css';

export function Header() {
  return (
    <div className="header">
      <div className="logo">aggmonitor.io</div>
      <div className="menuItem">ABOUT</div>
      <div className="menuItem">RESOURCES</div>
      <div className="menuItem">CONTACT</div>
    </div>
  )
}
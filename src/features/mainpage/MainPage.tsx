import React from "react";
import { Header } from "../header/Header";
import './MainPage.css';

export function MainPage() {
  return (
    <div className="main">
      <Header />
      <div>Main Content</div>
      <div>Footer</div>
    </div>
  )
}
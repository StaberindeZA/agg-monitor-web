import React from 'react';
import { Country } from '../features/country/Country';
import "./Pages.css"

export default function Main () {
  return (
    <div className="mainContainer">
      <div>
        <h1>Aggression Monitor</h1>
        <sub>Comparing country aggression by date</sub>
      </div>
      <div className="mainCountryContainer">
        <Country />
        <Country />
      </div>
    </div>
  )
}

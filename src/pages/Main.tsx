import React from 'react';
import { Country } from '../features/country/Country';
import "./Pages.css"

export default function Main () {
  return (
    <div className="mainContainer">
      <div>
        <h2>Aggression Monitor</h2>
        <sub>Comparing country aggression by date</sub>
      </div>
      <div className="mainCountryContainer">
        <Country />
        <Country />
      </div>
    </div>
  )
}

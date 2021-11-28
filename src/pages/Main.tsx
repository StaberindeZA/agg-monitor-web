import React from 'react';
import { Countries } from '../features/countries/Countries';

export default function Main () {
  return (
    <div className="">
      <div className="text-left ml-24 mt-14 mb-14">
        <h1 className="text-5xl font-bold mb-3">
          Aggression Monitor
          <span className="text-sm font-normal ml-8">Last updated {new Date(Date.now()).toUTCString()}</span>
        </h1>
        <sub className="text-lg">Comparing country aggression by date</sub>
      </div>
      <div className="m-24">
        <Countries />
      </div>
    </div>
  )
}

import React from "react";
import { Country } from "../country/Country";
import DetailedInfo from "../detailedinfo/DetailedInfo";

const tempData = {
  countries: [
    {
      name: 'United States',
      flagUrl: '',
      counter: 4,
      detailedInfo: [
        {
          date: '2021-11-14',
          title: 'Just small',
          summary: 'Just a small thing happened here on this day',
          URL: '',
        },
        {
          date: '2021-11-18',
          title: 'A medium thing',
          summary: 'Something medium happened. Not so sure what, but just medium.',
          URL: '',
        }
      ]
    },
    {
      name: 'China',
      flagUrl: '',
      counter: 23,
      detailedInfo: [
        {
          date: '2021-11-01',
          title: 'Nothing major',
          summary: 'Nothing major happened here.',
          URL: '',
        },
        {
          date: '2021-11-03',
          title: 'Something big',
          summary: 'Something big and scary happened.',
          URL: '',
        }
      ]
    }
  ]
}

export function Countries() {
  return (
    <div>
      {tempData.countries.map((country) => {
        const {name, flagUrl, counter, detailedInfo } = country;
        return <Country 
          name={name}
          flagUrl={flagUrl}
          counter={counter}
          detailedInfo={detailedInfo}
        />
      })}
    </div>
  )
}
import React from "react";
import { Country } from "../../components/country/Country";

const tempData = {
  countries: [
    {
      name: 'United States',
      flagUrl: 'agg-monitor-web/images/us_flag.svg',
      counter: 4,
      detailedInfo: [
        {
          date: '2021-11-15',
          source: 'The New York Times',
          title: '',
          summary: 'How the U.S. Hid an Airstrike That Killed Dozens of Civilians in Syria',
          URL: 'https://www.nytimes.com/2021/11/13/us/us-airstrikes-civilian-deaths.html',
        },
        {
          date: '2021-11-18',
          source: 'The New York Times',
          title: '',
          summary: 'Times Investigation: In U.S. Drone Strike, Evidence Suggests No ISIS Bomb',
          URL: 'https://www.nytimes.com/2021/09/10/world/asia/us-air-strike-drone-kabul-afghanistan-isis.html',
        },
        {
          date: '2021-06-28',
          source: 'AlJazeera',
          title: '',
          summary: 'US carries out air raids on Iran-backed militias in Syria, Iraq',
          URL: 'https://www.aljazeera.com/news/2021/6/28/us-carries-out-air-raids-on-iran-backed-groups-in-syria-iraq',
        }
      ]
    },
    {
      name: 'China',
      flagUrl: 'agg-monitor-web/images/china_flag.svg',
      counter: 23,
      detailedInfo: [
        {
          date: '2021-11-11',
          source: 'The Economist',
          title: '',
          summary: 'How the game of Go explains China’s aggression towards India',
          URL: 'https://www.economist.com/asia/2021/11/11/how-the-game-of-go-explains-chinas-aggression-towards-india',
        },
        {
          date: '2021-11-01',
          source: 'The Atlantic',
          title: '',
          summary: 'What Will Drive China to War?',
          URL: 'https://www.theatlantic.com/ideas/archive/2021/11/us-china-war/620571/',
        },
        {
          date: '2021-10-08',
          source: 'Washington Post',
          title: '',
          summary: 'China warns United States over news reports that American forces are stationed in Taiwan.',
          URL: 'https://www.washingtonpost.com/world/asia_pacific/taiwan-china-us-marines/2021/10/08/20378918-27d8-11ec-8739-5cb6aba30a30_story.html',
        }
      ]
    }
  ]
}

export function Countries() {
  return (
    <div className="grid grid-cols-2 gap-12">
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

import React from "react";
import { Accordion } from "../accordion/Accordion";
import DetailedInfo from "../detailedinfo/DetailedInfo";
import "./Country.css";
interface CountryProp {
  name: string;
  flagUrl: string;
  counter: number;
  detailedInfo?: {
    date: string;
    source: string;
    title: string;
    summary: string;
    URL: string;
  }[]
}

export function Country(prop: CountryProp) {
  const { name, flagUrl, counter, detailedInfo} = prop;
  return (
    <div>
      <div className="h-36">
        <img src={flagUrl} alt={name} className="mx-auto h-36"/>
      </div>
      <h4 className="text-sm font-bold">
        {name}
      </h4>
      <section className="mt-16">
        <div className="text-5xl font-bold m-2">
          {counter}
        </div>
        <div className="text-lg font-bold">
          Days aggression free
        </div>
      </section>
      <div>
        <Accordion>
          <>
          {detailedInfo && detailedInfo.map((info) => {
            const {date, source, title, summary, URL} = info;
            return (
              <DetailedInfo
                date={date}
                source={source}
                title={title}
                summary={summary}
                URL={URL}
              />)
          })}
          </>
        </Accordion>
        
      </div>
    </div>
  )
}
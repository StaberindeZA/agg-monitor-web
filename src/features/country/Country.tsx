import React from "react";
import DetailedInfo from "../detailedinfo/DetailedInfo";
import "./Country.css";
interface CountryProp {
  name: string;
  flagUrl: string;
  counter: number;
  detailedInfo?: {
    date: string;
    title: string;
    summary: string;
    URL: string;
  }[]
}

export function Country(prop: CountryProp) {
  const { name, flagUrl, counter, detailedInfo} = prop;
  return (
    <div className="countryContainer bg-pink-200">
      <div>
        {name}
      </div>
      <div>
        {flagUrl}
      </div>
      <div>
        {counter}
      </div>
      {detailedInfo && detailedInfo.map((info) => {
        const {date, title, summary, URL} = info;
        return <DetailedInfo
          date={date}
          title={title}
          summary={summary}
          URL={URL}
        />
      })}
    </div>
  )
}
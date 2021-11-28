import React from "react";

interface DetailedInfoProps {
  date: string;
  source: string;
  title: string;
  summary: string;
  URL: string;
}

export default function DetailedInfo (props: DetailedInfoProps ) {
  const { date, source, summary, URL } = props;
  return (
    <div className="text-left mb-3">
      <div className="text-xs">
        {date} VIA {source.toUpperCase()}
      </div>
      <div className="text-sm">
        {summary} <a href={URL} target="_blank" rel="noopener noreferrer"><span className="text-xs text-red-500">VIEW SOURCE</span></a>
      </div>
    </div>
  )
}
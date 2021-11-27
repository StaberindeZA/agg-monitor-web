import React from "react";

interface DetailedInfoProps {
  date: string;
  title: string;
  summary: string;
  URL: string;
}

export default function DetailedInfo (props: DetailedInfoProps ) {
  const { date, title, summary, URL } = props;
  return (
    <div>
      <div>
        {title} {date}
      </div>
      <div>
        {summary}
      </div>
      <div>
        <a href={URL}>More</a>
      </div>
    </div>
  )
}
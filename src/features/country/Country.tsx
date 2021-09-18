import React from "react";
import DetailedInfo from "../detailedinfo/DetailedInfo";
import "./Country.css";

export function Country() {
  return (
    <div className="countryContainer">
      <div>
        Country flag
      </div>
      <div>
        Country info
      </div>
      <div>
        Counter
      </div>
      <DetailedInfo />
    </div>
  )
}
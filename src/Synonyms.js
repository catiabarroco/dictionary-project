import React from "react";
import "./Synonyms.css"

export default function Synonyms(props) {
  return (
    <div className="Synonyms">
      {props.synonyms.map(function (synonym, index) {
        return (
          <div key={index}>
            <ul>
              <li>- {synonym}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

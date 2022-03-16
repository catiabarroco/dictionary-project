import React from "react";
import Meaning from "./Meaning";
import "./Results.css"

export default function Results(props) {
  if (props.results === null) {
    return null;
  } else {
    return (
      <div className="Results">
        <h2 className="shadow border">{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  }
}

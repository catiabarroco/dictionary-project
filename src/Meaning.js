import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3 className="mt-4 border">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definitionNumber mt-4">{index + 1} Definition</p>
            {definition.definition}
            <br />
            <small className="examles mt-2">{definition.example}</small>
          </div>
        );
      })}
    </div>
  );
}

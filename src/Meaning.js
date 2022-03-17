import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="mt-4 border">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p className="definitionNumber mt-4">
              <strong>Definition:</strong> {definition.definition}
              <br />
              <small className="mt-2">
                <Example example={definition.example} />
              </small>
            </p>
          </div>
        );
      })}
       <strong>Synonyms:</strong>
     <Synonyms synonyms={props.meaning.synonyms}/>
    </div>
  );
}

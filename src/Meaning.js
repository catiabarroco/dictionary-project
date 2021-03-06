import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="definitionNumber mt-4">
                <strong>Definition:</strong> {definition.definition}
                <br />
                <small className="mt-2">
                  <Example example={definition.example} />
                </small>
              </div>
            </div>
          );
        })}
        <Synonyms synonyms={props.meaning.synonyms} />
      </section>
    </div>
  );
}

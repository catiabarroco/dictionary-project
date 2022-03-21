import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import PhoneticsAudio from "./PhoneticsAudio";
import PhoneticsText from "./PhoneticsText"

export default function Results(props) {
  console.log(props.results)
  if (props.results === null) {
    return null;
  } else {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <section>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <PhoneticsAudio phonetics={phonetic} />
                <PhoneticsText phonetics={phonetic} />
              </div>
            );
          })}
        </section>

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

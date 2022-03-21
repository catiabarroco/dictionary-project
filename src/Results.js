import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import PhoneticsAudio from "./PhoneticsAudio";
import PhoneticsText from "./PhoneticsText";

export default function Results(props) {
  if (props.results === null) {
    return null;
  } else {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <section>
          <div className="row">
            <div className="col-2">
              {props.results.phonetics.map(function (phonetic, index) {
                return (
                  <div key={index}>
                    <div>
                      <PhoneticsText phonetics={phonetic} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-2">
              {props.results.phonetics.map(function (phonetic, index) {
                return (
                  <div key={index}>
                    <div>
                      <PhoneticsAudio phonetics={phonetic} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
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

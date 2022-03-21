import React from "react";
import "./PhoneticsAudio.css";

export default function PhoneticsAudio(props) {

  function play() {
    var audio = new Audio(props.phonetics.audio);
    audio.play();
  }

  if (props.phonetics.audio) {
    return (
      <div className="PhoneticsAudio">
        <button href="#" onClick={play}>
          <i className="fa fa-play"> </i>
        </button>

        <br />
      </div>
    );
  } else {
    return null;
  }
}

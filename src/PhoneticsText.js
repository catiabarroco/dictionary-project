import React from "react";
import "./PhoneticsText.css"

export default function PhoneticsText(props) {

  if (props.phonetics) {
    return (
      <div className="PhoneticsText">
        {props.phonetics.text}
      </div>
    );
  } else {
    return null;
  }
}

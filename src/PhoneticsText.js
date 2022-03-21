import React from "react";

export default function PhoneticsText(props) {
  console.log(props.phonetics);

  if (props.phonetics) {
    return (
      <div className="Phonetics">
      
        {props.phonetics.text}
      </div>
    );
  } else {
    return null;
  }
}

import React from "react";


export default function Phonetics(props) {
    console.log(props.phonetics.audio)
    return <div>
        <a href={props.phonetics.audio} target="_blank">Listen</a>
        <br />
        {props.phonetics.text}
    </div>
}
import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
import Phonetic from "./Phonetic";

export default function Results(props) {
  console.log("Results Component Props:", props.results); // Log props.results

  if (props.results && props.results[0]) {
    return (
      <div className="Results">
        <h2>{props.results[0].word} 📑</h2>
        {props.results[0].phonetics.map((phonetic, index) => (
          <div key={index}>
            <Phonetic phonetic={phonetic} />
          </div>
        ))}
        {props.results[0].meanings.map((meaning, index) => (
          <Meaning key={index} meaning={meaning} />
        ))}
      </div>
    );
  } else {
    return null;
  }
}

import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <br />
        <h3>Synonyms</h3>
        <br />
        <ul>
          {props.synonyms.map((synonym, index) => (
            <li key={index}>{synonym}</li>
          ))}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}

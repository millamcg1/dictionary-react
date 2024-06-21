import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms"; // Import Synonyms component

export default function Meaning(props) {
  if (props.meaning && props.meaning.definitions) {
    return (
      <div className="Meaning">
        {props.meaning.definitions.map((definition, index) => (
          <div key={index} className="MeaningDefinition">
            <br />
            <h3>{props.meaning.partOfSpeech}</h3>
            <br />
            <p className="Definition">
              <strong>Definition:</strong> {definition.definition}
            </p>
            {definition.example && (
              <div className="ExampleBox">
                <p className="Example">
                  <strong>Example:</strong> <em>{definition.example}</em>
                </p>
                <Synonyms synonyms={definition.synonyms} />
              </div>
            )}
            {index !== props.meaning.definitions.length - 1 && <br />}
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

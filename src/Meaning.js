import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              <strong>Definition:</strong> {definition.definition}
              <br />
              <em className="example">
                {" "}
                <strong>Example:</strong> {definition.example}
              </em>
              <br />
              <em>
                <strong className="synonyms">Synonyms:</strong>
                <Synonyms synonyms={definition.synonyms} />
              </em>
            </p>
          </div>
        );
      })}
      <p>{props.meaning.definitions[0].definition}</p>
      <p>{props.meaning.definitions[0].example}</p>
    </div>
  );
}

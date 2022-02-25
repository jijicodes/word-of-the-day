import React, { FC } from "react";
import { WordDefinition } from "../../utils/wordList";
import "./WordCard.css";

type Props = WordDefinition;

export const WordCard: FC<Props> = ({
  phrase,
  pronunciation,
  sentence,
  definition,
  audioUrl,
}) => {
  return (
    <div className="wordCard">
      <h1>{phrase}</h1>
      <h3>
        <button className="audioButton" onClick={() => audioUrl}>
          🗣️
        </button>{" "}
        [{pronunciation}]
      </h3>
      <h4>{sentence}</h4>
      <div className="defnition">{definition}</div>
    </div>
  );
};

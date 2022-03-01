import React, { FC, useState } from "react";
import { playAudio } from "../../utils/playAudio";
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
  const [playing, setPlaying] = useState(false);
  return (
    <div className="wordCard">
      <h1>{phrase}</h1>
      <h3>
        <button
          className="audioButton"
          onClick={() => {
            setPlaying(true);
            playAudio(audioUrl).finally(() => setPlaying(false));
          }}
          disabled={playing}
        >
          🗣️
        </button>{" "}
        [{pronunciation}]
      </h3>
      <h4>{sentence}</h4>
      <div className="defnition">{definition}</div>
    </div>
  );
};

import React, { FC } from "react";
import "./WordCard.css";

export interface Props {
  id: number;
  phrase: string;
  pronunciation: string;
  sentence: string;
  definition: string;
}

export const WordCard: FC<Props> = ({
  phrase,
  pronunciation,
  sentence,
  definition,
}) => {
  return (
    <div className="wordCard">
      <h1>{phrase}</h1>
      <h3>🗣️ [{pronunciation}]</h3>
      <h4>{sentence}</h4>
      <div className="defnition">{definition}</div>
    </div>
  );
};

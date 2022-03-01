import React, { FC, useState, useEffect } from "react";
import axios from "axios";
import { WordDefinition, wordListUrl } from "../../utils/wordList";
import { WordListItem } from "../WordListItem/WordListItem";
import "./ReviewView.css";
import { BsFillStarFill, BsStar } from "react-icons/bs";

interface Props {
  wordList: WordDefinition[];
  onClick: () => void;
}

const ICON_SIZE = 30;

export const ReviewView: FC<Props> = ({ wordList, onClick }) => {
  const [starred, setStarred] = useState();
  return (
    <div className="reviewView">
      <button className="backButton" onClick={onClick}>
        🔙
      </button>
      <div className="header">
        <p> Review the Words</p>
      </div>
      <div className="wordListItem">
        <table>
          {wordList.map((word) => (
            <WordListItem
              key={word.phrase}
              phrase={word.phrase}
              definition={word.definition}
              starred={word.starred}
              audioUrl={word.audioUrl}
              onStarToggle={() => setStarred(starred)}
            />
          ))}
        </table>
      </div>
    </div>
  );
};

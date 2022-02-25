import React, { FC, useState, useEffect } from "react";
import "../MainView/MainView.css";
import { DateText } from "../DateText/DateText";
import { WordCard } from "../WordCard/WordCard";
import { WordDefinition, wordListUrl } from "../../utils/wordList";
import { GenericButton } from "../GenericButton/GenericButton";
import axios from "axios";
import getDayOfYear from "date-fns/getDayOfYear";
import { WordListItem } from "../WordListItem/WordListItem";

interface Props {
  onReviewToggle: () => void;
  wordList: WordDefinition[];
}

const midnight = getDayOfYear(new Date());

const todaysWord = (
  dayOfTheYear: number,
  wordList: WordDefinition[]
): WordDefinition => {
  return wordList[dayOfTheYear % wordList.length];
};

export const MainView: FC<Props> = ({ onReviewToggle, wordList }) => {
  const wotd = todaysWord(midnight, wordList);

  return (
    <div className="body">
      <div className="frame">
        <div className="header">
          <p className="title">
            word <br /> of the <br /> day.
          </p>
          <DateText />
        </div>
        {wotd && <WordCard {...wotd} />}
        <GenericButton label={"Review the Word"} onPress={onReviewToggle} />
      </div>
    </div>
  );
};

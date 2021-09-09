import format from "date-fns/format";
import React, { useState } from "react";
import "./App.css";
import { AddBtn } from "./components/AddBtn/AddBtn";
import { DateText } from "./components/DateText/DateText";
import {
  WordCard,
  Props as WordDefinition,
} from "./components/WordCard/WordCard";
import { wordList } from "./utils/WordList";

function App() {
  const [wotd, setWotd] = useState<WordDefinition>(wordList[1]);

  return (
    <div className="body">
      <div className="frame">
        <div className="header">
          <p className="title">
            word <br /> of the <br /> day.
          </p>
          <DateText />
        </div>
        <WordCard {...wotd} />

        <AddBtn onClick={() => setWotd(wordList[2])} />
      </div>
    </div>
  );
}

export default App;

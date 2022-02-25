import React, { useState, useEffect } from "react";
import { WordDefinition, wordListUrl } from "./utils/wordList";
import getDayOfYear from "date-fns/getDayOfYear";
import axios from "axios";
import { MainView } from "./components/MainView/MainView";
import { ReviewView } from "./components/ReviewView/ReviewView";
import "./App.css";

function App() {
  const [arrayObjWord, setArrayObjWord] = useState<WordDefinition[]>([]);
  useEffect(() => {
    axios
      .get<WordDefinition[]>(wordListUrl)
      .then((response) => response["data"])
      .then(setArrayObjWord);
  }, []);
  console.log(arrayObjWord);

  const [reviewing, setReviewing] = useState(false);
  return (
    <div>
      {!reviewing ? (
        <MainView
          onReviewToggle={() => setReviewing(true)}
          wordList={arrayObjWord}
        />
      ) : (
        <ReviewView
          wordList={arrayObjWord}
          onClick={() => setReviewing(false)}
        />
      )}
    </div>
  );
}

export default App;

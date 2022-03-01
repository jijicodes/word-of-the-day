import React, { FC, useState } from "react";
import { WordDefinition } from "../../utils/wordList";
import { BsFillStarFill, BsStar } from "react-icons/bs";
import "../WordListItem/WordListItem.css";
import { GenericButton } from "../GenericButton/GenericButton";
import { playAudio } from "../../utils/playAudio";

type Props = Pick<WordDefinition, "phrase" | "definition"> & {
  starred: boolean;
  audioUrl: string;
  onStarToggle: () => void;
};

const ICON_SIZE = 30;

export const WordListItem: FC<Props> = ({
  phrase,
  definition,
  starred,
  onStarToggle,
  audioUrl,
}) => {
  const [playing, setPlaying] = useState(false);

  console.log("WordListItem", phrase, playing);
  return (
    <tr>
      <td>
        <button
          className="audioButtonReview"
          onClick={() => {
            setPlaying(true);
            playAudio(audioUrl).finally(() => setPlaying(false));
          }}
          disabled={playing}
        >
          🗣️
        </button>
      </td>
      <td className="word">
        <div>{phrase}</div>
      </td>

      <td className="def">
        <div>{definition}</div>
      </td>
      <td>
        <GenericButton
          label={
            starred ? (
              <BsStar size={ICON_SIZE} />
            ) : (
              <BsFillStarFill size={ICON_SIZE} />
            )
          }
          onPress={onStarToggle}
        />
      </td>
    </tr>
  );
};

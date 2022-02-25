import React, { FC } from "react";
import { WordDefinition } from "../../utils/wordList";
import { BsFillStarFill, BsStar } from "react-icons/bs";
import "../WordListItem/WordListItem.css";
import { GenericButton } from "../GenericButton/GenericButton";

type Props = Pick<WordDefinition, "phrase" | "definition"> & {
  starred: boolean;
  onStarToggle: () => void;
};

const ICON_SIZE = 30;

export const WordListItem: FC<Props> = ({
  phrase,
  definition,
  starred,
  onStarToggle,
}) => {
  return (
    <tr>
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

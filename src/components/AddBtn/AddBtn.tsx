import React, { FC } from "react";
import "./AddBtn.css";

interface Props {
  onClick: () => void;
}

export const AddBtn: FC<Props> = ({ onClick }) => {
  return <button onClick={() => onClick()}>New Word</button>;
};

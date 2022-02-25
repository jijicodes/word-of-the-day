import React, { FC, ReactNode } from "react";
import "./GenericButton.css";

interface Props {
  onPress: () => void;
  label: string | ReactNode;
}

export const GenericButton: FC<Props> = ({ onPress, label }) => {
  return (
    <button className="genericButton" onClick={onPress}>
      {label}
    </button>
  );
};

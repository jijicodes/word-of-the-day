import React, { FC, ReactNode } from "react";
import "./GenericButton.css";

interface Props {
  onPress: () => void;
  label: string | ReactNode;
  disabled?: boolean;
}

export const GenericButton: FC<Props> = ({ onPress, label, disabled }) => {
  return (
    <button className="genericButton" onClick={onPress} disabled={disabled}>
      {label}
    </button>
  );
};

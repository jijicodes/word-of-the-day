import format from "date-fns/format";
import react, { FC } from "react";
import "./DateText.css";

export interface Props {}

export const DateText: FC<Props> = () => {
  const currentYear = format(new Date(), "yyyy");
  const currentDate = format(new Date(), "MMM d");
  return (
    <div className="date">
      <h1>| {currentYear}</h1>
      <div>{currentDate}</div>
    </div>
  );
};

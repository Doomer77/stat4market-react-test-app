import React from "react";
import "./HeadingSecondary.css";

export default function HeadingSecondary(props) {
  const { text, marginbottom } = props;

  let styleMarginBootom = marginbottom
    ? "heading-secondary heading-secondary--mb"
    : "heading-secondary";

  return (
    <div className="row">
      <div className="col">
        <h2 className={styleMarginBootom}>{text}</h2>
      </div>
    </div>
  );
}

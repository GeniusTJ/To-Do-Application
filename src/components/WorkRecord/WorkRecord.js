import React from "react";
import style from "./WorkRecord.module.css";

const WorkRecord = (props) => {
  return (
    <div className={style.outer_div}>
      <input type="checkbox" />
      <h3>{props.title}</h3>
      <button className={style.button_style} type="button">DEL</button>
    </div>
  );
};

export default WorkRecord;

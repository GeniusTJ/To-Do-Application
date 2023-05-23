import React from "react";
import Title from "./Title/Title";
import style from "./OuterWrapper.module.css";
import InputBox from "./InputBox/InputBox";
import WorkRecord from "./WorkRecord/WorkRecord";
const OuterWrapper = () => {
  return (
    <div className={style.outer}>
      <Title />
      <InputBox />
      <WorkRecord title="Workouts" />
      <WorkRecord title="Office time"/>
      <WorkRecord title="Coffee time"/>
      <WorkRecord title="Party time" />
    
    </div>
  );
};

export default OuterWrapper;

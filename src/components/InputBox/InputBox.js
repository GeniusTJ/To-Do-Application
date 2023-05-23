import React, { useState } from "react";
import style from "./InputBox.module.css";
const InputBox = () => {
  const [typeWord, setTypeWord] = useState('');

  const clickHandler = () => {
    console.log(typeWord);
  };

  const typeHanler = (event) => {
    console.log(event.target.value);
    // typeWord = event.target.value;
    setTypeWord(event.target.value);
  };
  return (
    <div className={style.outer_div}>
      <input
        onChange={typeHanler}
        className={style.input_style}
        type="text"
        placeholder="Input Text"
      />
      <button
        className={style.button_style}
        type="button"
        onClick={clickHandler}
      >
        {typeWord}
      </button>
    </div>
  );
};

export default InputBox;

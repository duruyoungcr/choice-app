import React from "react";

const Result = ({
  question,
  setSubmitted,
  setOptions,
  setQuestion,
  options,
  randomNumber,
  setRandomNumber,
}) => {
  const handleClick = (e) => {
    switch (e.target.name) {
      case "choose":
        const max = options.length;
        setRandomNumber(Math.floor(Math.random() * max));
        break;
      case "return":
        setOptions(["", ""]);
        setQuestion("");
        setSubmitted(false);
        break;
      default:
        break;
    }
  };
  return (
    <div className="result">
      <h2 className="colored">Question</h2>
      <h2 className="result__question">{question} ?</h2>
      <ul className="result__options">
        <h2 className="colored">Choices</h2>
        {options.map((option, index) => (
          <li
            className={`result__option ${
              randomNumber === index ? "selected" : null
            }`}
            key={index}
          >
            <span>{index + 1}.</span> {option}
          </li>
        ))}
      </ul>
      <div className="result__buttons">
        <button className="form__addBtn" name="choose" onClick={handleClick}>
          Choose another
        </button>
        <button className="form__choiceBtn" name="return" onClick={handleClick}>
          Ask another question
        </button>
      </div>
    </div>
  );
};

export default Result;

import React from "react";
import Option from "./Option";

const Form = ({
  question,
  setQuestion,
  setSubmitted,
  setRandomNumber,
  options,
  setOptions,
  error,
  setError,
}) => {
  const handleQuestion = (e) => {
    setQuestion(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    if (question !== "") {
      if (options.every((option) => option !== "")) {
        setSubmitted(true);
        const max = options.length;
        setRandomNumber(Math.floor(Math.random() * max));
      } else {
        setError("Can not have an empty option input");
      }
    } else {
      setError("Question input cannot be empty");
    }

    e.preventDefault();
  };

  const addOption = () => {
    const newOptions = [...options, ""];
    setOptions([...newOptions]);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <h2 className="colored q">Question</h2>
      <p className="form__error">{error ? error : null}</p>
      <input
        type="text"
        name="question"
        id="question"
        value={question}
        onChange={handleQuestion}
        placeholder="Enter your question"
      />
      <h2 className="colored">Choices</h2>
      {options.map((choice, index) => (
        <Option
          setOptions={setOptions}
          options={options}
          choice={choice}
          index={index}
          setError={setError}
        />
      ))}
      <div className="form__buttons">
        <button
          className="form__addBtn"
          onClick={addOption}
          disabled={options.length >= 5 ? true : false}
        >
          Add option <span className="colored">+</span>
        </button>
        <button
          className="form__choiceBtn"
          type="submit"
          disabled={options.length < 2 ? true : false}
          onClick={handleSubmit}
        >
          fate's choice
        </button>
      </div>
      <p className="form__footer colored">
        *Note: Do not include a question mark when entering your question and
        options are limited to between 2 - 5 options.
      </p>
    </form>
  );
};

export default Form;

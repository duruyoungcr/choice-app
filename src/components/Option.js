import React from "react";

const Option = ({ options, setOptions, index, choice, setError }) => {
  const handleOption = (e, index) => {
    const newOptions = [...options];
    newOptions[index] = e.target.value;
    setOptions([...newOptions]);
    setError("");
  };
  const removeOption = (e, index) => {
    let newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions([...newOptions]);
    setError("");
  };
  return (
    <div className="option" key={index}>
      <input
        type="text"
        name="option"
        placeholder={`Choice ${index + 1}`}
        onChange={(e) => handleOption(e, index)}
        value={choice}
      />
      <p
        className="form__removeBtn colored"
        onClick={(e) => removeOption(e, index)}
      >
        remove
      </p>
    </div>
  );
};

export default Option;

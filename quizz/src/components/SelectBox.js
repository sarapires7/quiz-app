import React from "react";

const SelectBox = ({ id, options, handleChangeOption }) => {
  const handleChange = (e) => {
    handleChangeOption(id, e.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option value="">Select an option</option>
      {options.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  );
};

export default SelectBox;

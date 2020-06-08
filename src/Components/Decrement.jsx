import React from "react";

const Decrement = ({ value, handleValue }) => {
  const handleValueChange = () => {
    if (value <= 1) return;
    handleValue(value - 1);
  };
  return (
    <i
      className="fas fa-arrow-down"
      onClick={() => handleValueChange(value - 1)}
    ></i>
  );
};

export default Decrement;

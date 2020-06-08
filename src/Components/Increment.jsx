import React from 'react'

const Increment = ({ value, handleValue }) => {
  const handleValueChange = () => {
    if (value >= 60) return;
    handleValue(value + 1);
  };

  return (
    <i className="fas fa-arrow-up" onClick={() => handleValueChange()}></i>
  );
};


export default Increment

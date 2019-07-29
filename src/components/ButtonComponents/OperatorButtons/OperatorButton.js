import React from "react";
import "../../../App.css";

const OperatorButton = props => {
  const op = props.btn
  return (
    <button className='operator'>
      {op/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default OperatorButton;

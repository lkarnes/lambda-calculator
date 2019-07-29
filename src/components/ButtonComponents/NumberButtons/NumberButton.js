import React from "react";
import "../../../App";

const NumberButton = props => {
  const int = props.int;
  return (
    <button className='number' id={'a'+int}>
      {int/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default NumberButton;

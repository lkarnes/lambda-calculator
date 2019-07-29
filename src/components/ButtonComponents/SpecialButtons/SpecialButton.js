import React from "react";
import "../../../App.css";

const SpecialButton = props => {
  const spec = props.value;
  return (
    <button className='special'>
      {spec/* Display a button element rendering the data being passed down from the parent container on props */}
    </button>
  );
};

export default SpecialButton;

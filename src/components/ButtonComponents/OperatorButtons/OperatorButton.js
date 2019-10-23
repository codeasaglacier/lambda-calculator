import React from "react";

const OperatorButton = props => {
  console.log('Operator props', props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button className="operators" onClick={() => props.operator.char}>
        {props.operator.char}
      </button>
    }
    </>
  );
};

export default OperatorButton
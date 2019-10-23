import React from "react";

const SpecialButton = props => {
  // console.log("special props", props)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      <button onClick={() => props.specials}>
       {props.specials}
      </button>
      }
      
    </>
  );
};

export default SpecialButton
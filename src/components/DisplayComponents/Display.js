import React from "react";

const Display = props => {
  console.log("display props", props)
  return <div className="display">
    {props.display}
  </div>;
};
export default Display
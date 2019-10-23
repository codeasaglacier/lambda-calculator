import React, { useState } from "react";
import SpecialButton from "./SpecialButton"
//import any components needed

import { specials } from '../../../data'

//Import your array data to from the provided data file

export default function Specials () {
  // STEP 2 - add the imported data to state
  const [specialsState] = useState(specials)
  // removed setSpecialsState
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       specialsState.map((specials, index) => (
        <SpecialButton
         specials={specials}
         key={index}

         />

      ))}
    </div>
  );
};

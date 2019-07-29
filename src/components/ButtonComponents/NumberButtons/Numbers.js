import React, {useState} from "react";
import { numbers } from '../../../data';
import NumberButton from './NumberButton';
//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const style  = {display: 'flex', width: '300px', flexWrap : 'wrap'}
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div style={style}>

      {numberState.map(number=>{
        return <NumberButton int={number}/>
      })
        /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
  
};

export default Numbers; 

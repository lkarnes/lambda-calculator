import React,{useState} from "react";
import {operators} from '../../../data';
import OperatorButton from './OperatorButton'
import Numbers from "../NumberButtons/Numbers";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operator, setOperators]= useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div>
      {
        operator.map(ops => {
          return <OperatorButton btn = {ops.char}/>
        })
        /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};
export default Operators;

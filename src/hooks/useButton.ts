import { useState } from "react";

export function useButton(NumberOfInputs: number){
  const [inputEnteredValue, setInputEnteredValue] = useState('');
  const [textareaEnteredValue, setTextareaEnteredValue] = useState('');

  let isActive = false;

  if(NumberOfInputs === 1){
    if(inputEnteredValue){
      isActive = true;
    }else{
      isActive = false;
    }
  }else if(NumberOfInputs === 2){

    if(inputEnteredValue && textareaEnteredValue){
      isActive = true;
    }else{
      isActive = false;
    }
  }

  // TO DO: RETURN WHAT NEED TO BE FILLED TO BUTTON BE ACTIVE.

  return {
    isActive,
    inputEnteredValue,
    setInputEnteredValue,
    textareaEnteredValue,
    setTextareaEnteredValue,
    input: {
      onChange: (event: React.ChangeEvent<HTMLInputElement>) =>{
        setInputEnteredValue(event.target.value)
      }
    },
    textarea: {
      onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
        setTextareaEnteredValue(event.target.value)
      }
    }

  }

}
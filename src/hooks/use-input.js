import { useState } from "react";

export const useInput = (validateFun) => {
  const [inputValue, setInputValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  // value is Valid  => Boolean
  const valueIsValid = validateFun(inputValue);

  // hasError => Boolean
  const hasError = !valueIsValid && isTouched;

  // input Change Handler
  const inputChangeHandler = (e) => setInputValue(e.target.value);
  // input Blur Handler
  const inputBlurHandler = () => setIsTouched(true);

  // reset
  const reset = () => setInputValue("");

  return {
    inputChangeHandler,
    inputBlurHandler,
    reset,
    value: inputValue,
    valueIsValid: valueIsValid,
    hasError,
  };
};

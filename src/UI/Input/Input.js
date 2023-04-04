import classes from "./Input.module.css";

export const Input = (props) => {
  const { input, errorMessage, invalid } = props;

  const inputNotValid = invalid && errorMessage;
  const errorText = <p className={classes["error-msg"]}>{errorMessage}</p>;
  const inputClasses = invalid ? classes.invalid : "";

  return (
    <div className={classes.formControl}>
      <input {...input} className={inputClasses} />
      {inputNotValid && errorText}
    </div>
  );
};

export default Input;

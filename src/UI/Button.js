import classes from "./Button.module.css";

const Button = (props) => {
  const btnClass = props.isDeleteBtn
    ? `${classes.button} ${classes.delete}`
    : classes.button;

  return (
    <button
      type={props.type || "button"}
      className={btnClass}
      onClick={props.onClick}
      title={props.title || null}
      disabled={props.disabled || false}
    >
      {props.children}
    </button>
  );
};

export default Button;

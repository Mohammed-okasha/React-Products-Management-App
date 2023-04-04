import classes from "./Backdrop.module.css";

export const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

export default Backdrop;

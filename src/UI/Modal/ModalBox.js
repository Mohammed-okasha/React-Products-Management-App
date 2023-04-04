import classes from "./ModalBox.module.css";

const ModalBox = (props) => {
  return <div className={classes.modalBox}>{props.children}</div>;
};

export default ModalBox;

import Modal from "../../UI/Modal/Modal";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import { FaExclamation } from "react-icons/fa";
import classes from "./Confirm.module.css";

const ConfirmModal = (props) => {
  return (
    <Modal closeModal={props.onHideConfirm}>
      <Card>
        <div className={classes.icon}>
          <FaExclamation />
        </div>
        <p className={classes["confirm-msg"]}>{props.confirmMessage}</p>
        <div className={classes.confirmActions}>
          <Button onClick={props.onDelete}>delete</Button>
          <Button onClick={props.onHideConfirm}>cancel</Button>
        </div>
      </Card>
    </Modal>
  );
};

export default ConfirmModal;

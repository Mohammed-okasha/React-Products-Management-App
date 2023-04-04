import Button from "../../UI/Button";
import classes from "./FormActions.module.css";

const FormActions = (props) => {
  return (
    <div className={classes["form-actions"]}>
      <div>
        <Button type="submit" disabled={props.disabled} title={props.title}>
          {props.btnTitle}
        </Button>
        <Button onClick={props.onCloseModal}>cancel</Button>
      </div>
      <div>
        <strong>total</strong>
        <span className={classes["total-price"]}>{props.total}</span>
      </div>
    </div>
  );
};

export default FormActions;

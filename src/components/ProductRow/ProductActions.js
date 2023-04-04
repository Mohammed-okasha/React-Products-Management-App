import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import classes from "./ProductActions.module.css";

const ProductActions = (props) => {
  return (
    <td>
      <div className={classes.productActions}>
        <button title="Product-Details" onClick={props.onShowProductDetails}>
          <FaEye />
        </button>
        <button title="Edit-Product" onClick={props.onShowEditProduct}>
          <FaEdit />
        </button>
        <button title="Delete-Product" onClick={props.onShowConfirmDelete}>
          <FaTrash />
        </button>
      </div>
    </td>
  );
};

export default ProductActions;

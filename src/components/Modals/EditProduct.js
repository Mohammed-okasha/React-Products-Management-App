import { useDispatch } from "react-redux";
import { productsActionsCreators as productsActions } from "../../store/actions/products-actions";
import { toast } from "react-toastify";
import Modal from "../../UI/Modal/Modal";
import Card from "../../UI/Card";
import EditForm from "../Forms/EditForm";
//=====================================================================
const EditProduct = ({ product, onHideEditModal }) => {
  const dispatch = useDispatch();

  const editProductHandler = (product) => {
    // Dispatch Action
    dispatch(productsActions.PRODUCT_HANDLING(product));

    // Hide Edit Modal
    onHideEditModal();

    // Show Success Message
    toast.success("product updated successfully", {
      position: "top-left",
      autoClose: 3000,
      theme: "colored",
    });
  };

  return (
    <Modal closeModal={onHideEditModal}>
      <Card>
        <h3 style={{ marginBottom: "1rem" }}>Edit Product</h3>
        <EditForm
          product={product}
          onHideModal={onHideEditModal}
          onEditProduct={editProductHandler}
        />
      </Card>
    </Modal>
  );
};

export default EditProduct;

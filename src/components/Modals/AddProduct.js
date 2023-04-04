import { useDispatch } from "react-redux";
import { productsActionsCreators as productsActions } from "../../store/actions/products-actions";
import { toast } from "react-toastify";
import Modal from "../../UI/Modal/Modal";
import Card from "../../UI/Card";
import AddFrom from "../Forms/AddForm";
//===========================================================
const AddProduct = (props) => {
  const dispatch = useDispatch();

  const addProductHandler = (product) => {
    const productId = Math.random() + new Date().getTime();
    const createdProduct = { id: productId.toString(), ...product };

    //  dispatch addProduct Action
    dispatch(productsActions.PRODUCT_HANDLING(createdProduct));

    // Hide Add Product Modal
    props.onHideAddModal();

    // Success Message
    toast.success("product added successfully", {
      position: "top-left",
      autoClose: 3000,
      theme: "colored",
    });
  };

  return (
    <Modal closeModal={props.onHideAddModal}>
      <Card>
        <h3 style={{ marginBottom: "1rem" }}>add product</h3>
        <AddFrom
          onHideModal={props.onHideAddModal}
          onManipulateProduct={addProductHandler}
          formType="add-form"
        />
      </Card>
    </Modal>
  );
};

export default AddProduct;

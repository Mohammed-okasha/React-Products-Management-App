import { useReducer, useMemo } from "react";
import { useDispatch } from "react-redux";
import { productsActionsCreators as productsActions } from "../../store/actions/products-actions";
import { toast } from "react-toastify";
import TableRow from "./TableRow";
import ProductData from "./ProductData";
import ProductActions from "./ProductActions";
import ConfirmModal from "../Modals/Confirm";
import EditProduct from "../Modals/EditProduct";
import ProductDetails from "../ProductDetails/ProductDetails";
//=============================================================
const productModalsState = {
  confirmIsShown: false,
  editModalIsShown: false,
  detailsModalIsShown: false,
};

const productModalsReducer = (state, action) => {
  if (action.type === "SHOW_CONFIRM") {
    return {
      ...state,
      confirmIsShown: true,
    };
  }

  if (action.type === "SHOW_EDIT_MODAL") {
    return {
      ...state,
      editModalIsShown: true,
    };
  }

  if (action.type === "SHOW_EDIT_MODAL") {
    return {
      ...state,
      editModalIsShown: true,
    };
  }

  if (action.type === "SHOW_DETAILS_MODAL") {
    return {
      ...state,
      detailsModalIsShown: true,
    };
  }

  return productModalsState;
};
//=============================================================
const ProductRow = ({ product }) => {
  const [productModals, dispatchFun] = useReducer(
    productModalsReducer,
    productModalsState
  );

  const dispatch = useDispatch();

  // Confirm Modal Handlers
  const showConfirmDelete = () => dispatchFun({ type: "SHOW_CONFIRM" });
  const hideConfirmDelete = () => dispatchFun({ type: "HIDE_CONFIRM" });
  // Edit Modal Handlers
  const showEditProductModal = () => dispatchFun({ type: "SHOW_EDIT_MODAL" });
  const hideEditProductModal = () => dispatchFun({ type: "HIDE_EDIT_MODAL" });
  // Details Modal Handlers
  const showDetailsModal = () => dispatchFun({ type: "SHOW_DETAILS_MODAL" });
  const hideDetailsModal = () => dispatchFun({ type: "HIDE_DETAILS_MODAL" });

  // Delete Product Handler
  const deleteProductHandler = () => {
    dispatch(productsActions.DELETE_PRODUCT(product.id));
    // Hide Confirm Modal
    // Show Success Message
    toast.success("product deleted successfully", {
      position: "top-left",
      autoClose: 3000,
      theme: "colored",
    });
  };

  const confirmText = (
    <span>
      are you sure you want delete{" "}
      <span style={{ borderBottom: "2px solid #3d8361" }}>{product.title}</span>
    </span>
  );

  // Memoized productContent
  const productContent = useMemo(() => {
    return (
      <>
        <ProductData productItem={product} />
        <ProductActions
          onShowConfirmDelete={showConfirmDelete}
          onShowEditProduct={showEditProductModal}
          onShowProductDetails={showDetailsModal}
        />
      </>
    );
  }, [product]);

  return (
    <>
      <TableRow>{productContent}</TableRow>
      {productModals.confirmIsShown && (
        <ConfirmModal
          onDelete={deleteProductHandler}
          onHideConfirm={hideConfirmDelete}
          confirmMessage={confirmText}
        />
      )}
      {productModals.editModalIsShown && (
        <EditProduct onHideEditModal={hideEditProductModal} product={product} />
      )}
      {productModals.detailsModalIsShown && (
        <ProductDetails
          product={product}
          onHideProductDetails={hideDetailsModal}
        />
      )}
    </>
  );
};

export default ProductRow;

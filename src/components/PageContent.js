import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uiActionsCreators } from "../store/actions/ui-actions";
import { productsActionsCreators as productsActions } from "../store/actions/products-actions";
import { toast } from "react-toastify";
import Container from "../UI/Container";
import Title from "../UI/Title";
import ProductsActions from "./ProductsActions/ProductsActions";
import ProductsTable from "./ProductsTable/ProductsTable";
import AddProduct from "./Modals/AddProduct";
import ConfirmModal from "./Modals/Confirm";
//=================================================================
const PageContent = () => {
  const { ui, products } = useSelector((state) => state);
  const dispatch = useDispatch();

  const filteredProducts = useMemo(
    () =>
      products.items.filter((product) => {
        if (products.categoryValue === "all") {
          return true;
        }

        return product.category === products.categoryValue;
      }, []),
    [products.categoryValue, products.items]
  );

  const countOfProducts = products.items.length;

  const hideAddModalHandler = () =>
    dispatch(uiActionsCreators.HIDE_ADD_MODAL());

  const hideClearModalHandler = () =>
    dispatch(uiActionsCreators.HIDE_CLEAR_MODAL());

  // Delete All Products Handler
  const deleteAllProductsHandler = () => {
    dispatch(productsActions.DELETE_ALL_PRODUCTS());
    // Hide Edit Modal
    hideClearModalHandler();

    // Show Success Message
    toast.success("Products deleted successfully", {
      position: "top-left",
      autoClose: 3000,
      theme: "colored",
    });
  };

  return (
    <>
      <section style={{ padding: "3rem 0" }}>
        <Container>
          <Title />
          <ProductsActions
            products={products.items}
            productsCount={countOfProducts}
          />
          <ProductsTable products={filteredProducts} />
        </Container>
      </section>
      {ui.addModalIsShown && (
        <AddProduct onHideAddModal={hideAddModalHandler} />
      )}
      {ui.clearModalIsShown && (
        <ConfirmModal
          onDelete={deleteAllProductsHandler}
          onHideConfirm={hideClearModalHandler}
          confirmMessage="are you sure you want delete all products!"
        />
      )}
    </>
  );
};

export default PageContent;

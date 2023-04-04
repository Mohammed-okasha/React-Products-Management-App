import React from "react";
import { useDispatch } from "react-redux";
import { uiActionsCreators } from "../../store/actions/ui-actions";
import ActionButtons from "./ActionButtons";
import FilterProducts from "./FilterProducts";

const ProductsActions = (props) => {
  const dispatch = useDispatch();

  const showAddModalHandler = () => {
    dispatch(uiActionsCreators.SHOW_ADD_MODAL());
  };

  const showClearModalHandler = () => {
    dispatch(uiActionsCreators.SHOW_CLEAR_MODAL());
  };

  return (
    <div style={{ margin: "2rem 0" }}>
      <ActionButtons
        onShowAddModal={showAddModalHandler}
        onShowClearModal={showClearModalHandler}
        productsCount={props.productsCount}
      />
      <FilterProducts products={props.products} />
    </div>
  );
};

export default React.memo(ProductsActions);

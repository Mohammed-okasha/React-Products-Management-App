import { useDispatch } from "react-redux";
import { productsActionsCreators as productsActions } from "../../store/actions/products-actions";
import SelectCategory from "./SelectCategory";
import classes from "./FilterProducts.module.css";

export const FilterProducts = (props) => {
  const dispatch = useDispatch();

  const uniqueCategories = new Set(
    props.products.map((product) => product.category)
  );
  const categories = ["all", ...uniqueCategories];

  // Select Option Handler
  const selectOptionHandler = (e) => {
    dispatch(productsActions.FILTER_PRODUCTS(e.target.value));
  };

  const hasProducts = props.products.length > 0;

  return (
    <div className={classes.filterProducts}>
      <SelectCategory
        options={categories}
        onSelectOption={selectOptionHandler}
        disabled={!hasProducts}
        title={!hasProducts && "No Products Found"}
      />
    </div>
  );
};

export default FilterProducts;

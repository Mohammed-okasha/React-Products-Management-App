import React from "react";
import ProductsTableContent from "./ProductsTableContent";
import classes from "./ProductsTable.module.css";

const ProductsTable = ({ products }) => {
  return (
    <div className={classes.productsTable}>
      <ProductsTableContent products={products} />
    </div>
  );
};

export default React.memo(ProductsTable);

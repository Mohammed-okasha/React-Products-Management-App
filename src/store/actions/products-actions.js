export const productsActinonTypes = {
  productHandling: "PRODUCT_HANDLING",
  deleteProduct: "DELETE_PRODUCT",
  deleteAllProducts: "DELETE_ALL_PRODUCTS",
  filterProducts: "FILTER_PRODUCTS",
};

export const productsActionsCreators = {
  PRODUCT_HANDLING: (product) => {
    return {
      type: productsActinonTypes.productHandling,
      payload: product,
    };
  },
  DELETE_PRODUCT: (id) => {
    return {
      type: productsActinonTypes.deleteProduct,
      id: id,
    };
  },
  DELETE_ALL_PRODUCTS: () => {
    return {
      type: productsActinonTypes.deleteAllProducts,
    };
  },
  FILTER_PRODUCTS: (value) => {
    return {
      type: productsActinonTypes.filterProducts,
      payload: value,
    };
  },
};

import { productsActinonTypes } from "../actions/products-actions";
const { productHandling, deleteProduct, deleteAllProducts, filterProducts } =
  productsActinonTypes;
//============================================================
function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
//============================================================
const storedProducts = JSON.parse(localStorage.getItem("products"));

const defaultProductsState = {
  items: storedProducts ? storedProducts : [],
  categoryValue: "all",
};

const productsReducer = (state = defaultProductsState, action) => {
  if (action.type === productHandling) {
    const productIndex = state.items.findIndex(
      (product) => product.id === action.payload.id
    );

    const existingProduct = state.items[productIndex];

    // Update Products
    let updatedProducts;

    // Check if Product existing
    if (existingProduct) {
      // Updated Product Approach
      updatedProducts = state.items.slice();
      updatedProducts[productIndex] = { ...action.payload };
    } else {
      updatedProducts = state.items.concat(action.payload);
    }

    // Save Data
    saveData("products", updatedProducts);

    return {
      items: updatedProducts,
      categoryValue: state.categoryValue,
    };
  }

  if (action.type === deleteProduct) {
    const filteredProducts = state.items.filter(
      (product) => product.id !== action.id
    );

    // Save Data
    saveData("products", filteredProducts);

    return {
      items: filteredProducts,
      categoryValue: state.categoryValue,
    };
  }

  if (action.type === deleteAllProducts) {
    localStorage.removeItem("products");

    return {
      items: [],
      categoryValue: state.categoryValue,
    };
  }

  if (action.type === filterProducts) {
    return {
      items: state.items,
      categoryValue: action.payload,
    };
  }

  return state;
};

export default productsReducer;

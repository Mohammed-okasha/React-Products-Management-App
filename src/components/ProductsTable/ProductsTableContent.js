import ProductsTableHead from "./ProductsTableHead";
import ProductRow from "../ProductRow/ProductRow";

const ProductsTableContent = ({ products }) => {
  const hasProducts = products.length > 0;

  if (hasProducts) {
    const table = (
      <table>
        <ProductsTableHead />
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    );
    return table;
  }

  return <h2>no products found!</h2>;
};

export default ProductsTableContent;

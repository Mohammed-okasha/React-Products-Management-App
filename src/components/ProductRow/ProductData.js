const ProductData = ({ productItem, total }) => {
  const productData = Object.entries(productItem)
    .reduce((filteredProduct, [key, value]) => {
      if (key === "id") {
        return filteredProduct;
      }
      return filteredProduct.concat(value);
    }, [])
    .map((value, index) => <td key={index}>{value}</td>);
  return <>{productData}</>;
};

export default ProductData;

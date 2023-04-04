import Modal from "../../UI/Modal/Modal";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import classes from "./ProductDetails.module.css";

const ProductDetails = ({ product, onHideProductDetails }) => {
  const productData = Object.entries(product);
  productData.splice(0, 1);

  const filteredProduct = productData.slice().map(([key, value], index) => (
    <li key={index}>
      {key}: <strong>{value}</strong>
    </li>
  ));

  return (
    <Modal closeModal={onHideProductDetails}>
      <Card>
        <h3 style={{ marginBottom: ".5rem" }}>product details</h3>
        <ul className={classes.productList}>{filteredProduct}</ul>
        <Button onClick={onHideProductDetails}>close</Button>
      </Card>
    </Modal>
  );
};

export default ProductDetails;

import { useEffect, useState } from "react";
import InputGroup from "../../UI/Input/InputGroup";
import Input from "../../UI/Input/Input";
import FormActions from "../Forms/FormActions";
//=====================================================================
function getTotalPrice(price, tax, ads, discount) {
  const extraExpenses = +price + (+tax + +ads);
  const total = extraExpenses - +discount;
  return total;
}

let stop = false;
//=====================================================================
export const EditForm = ({ product, onHideModal, onEditProduct }) => {
  const [existingProduct, setExistingProduct] = useState(product);
  const { price, tax, ads, discount } = existingProduct;

  const [totalPrice, setTotalPrice] = useState(product.total);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExistingProduct((prevExistingProduct) => {
      return {
        ...prevExistingProduct,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const updatedProduct = {
      id: existingProduct.id,
      ...existingProduct,
      total: totalPrice,
    };

    onEditProduct(updatedProduct);
  };

  useEffect(() => {
    if (!stop) {
      stop = true;
      return;
    }

    const totalPriceTimer = setTimeout(() => {
      const totalPrice = getTotalPrice(price, tax, ads, discount);
      setTotalPrice(totalPrice);
    }, 300);

    return () => clearTimeout(totalPriceTimer);
  }, [price, tax, ads, discount]);

  return (
    <form onSubmit={submitHandler}>
      <InputGroup>
        <Input
          input={{
            type: "text",
            name: "title",
            placeholder: "product title",
            onChange: handleChange,
            defaultValue: product ? product.title : "",
            required: "required",
          }}
        />
        <Input
          input={{
            type: "text",
            name: "category",
            placeholder: "product category",
            onChange: handleChange,
            required: "required",
            defaultValue: product ? product.category : "",
          }}
        />
      </InputGroup>
      <InputGroup>
        <Input
          input={{
            type: "number",
            name: "price",
            placeholder: "product price",
            onChange: handleChange,
            required: "required",
            defaultValue: product ? product.price : "",
            min: 1,
          }}
        />
        <Input
          input={{
            type: "number",
            name: "tax",
            placeholder: "product taxes",
            onChange: handleChange,
            required: "required",
            defaultValue: product ? product.tax : "",
            min: 1,
          }}
        />
        <Input
          input={{
            type: "number",
            name: "ads",
            placeholder: "product ads",
            onChange: handleChange,
            defaultValue: product ? product.ads : "",
            min: 0,
          }}
        />
      </InputGroup>
      <InputGroup>
        <Input
          input={{
            type: "number",
            name: "discount",
            placeholder: "product discount",
            onChange: handleChange,
            defaultValue: product ? product.discount : "",
            min: 0,
          }}
        />
        <Input
          input={{
            type: "number",
            name: "quantity",
            placeholder: "product quantity",
            onChange: handleChange,
            required: "required",
            defaultValue: product ? product.quantity : "",
            min: 1,
          }}
        />
      </InputGroup>
      <FormActions
        onCloseModal={onHideModal}
        btnTitle="edit"
        total={totalPrice}
      />
    </form>
  );
};

export default EditForm;

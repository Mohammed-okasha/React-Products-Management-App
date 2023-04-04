import { useEffect, useState, useMemo } from "react";
import { useInput } from "../../hooks/use-input";
import InputGroup from "../../UI/Input/InputGroup";
import Input from "../../UI/Input/Input";
import FormActions from "./FormActions";
import { requireRule } from "./validation-rules";
//===========================================================
function getTotalPrice(priceInfo) {
  const { price, hasTax, tax, hasAds, ads, hasDiscount, discount } = priceInfo;

  if (hasTax && hasAds && hasDiscount) {
    const extraExpenses = +tax + +ads;
    const productPrice = +price + extraExpenses;
    return productPrice - +discount;
  } else if (hasTax && hasAds) {
    const extraExpenses = +tax + +ads;
    return +price + extraExpenses;
  } else if (hasTax) {
    return +price + +tax;
  } else if (hasAds) {
    return +price + +ads;
  } else if (hasDiscount) {
    return +price + +discount;
  } else {
    return price;
  }
}
//===========================================================
const AddForm = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const { onHideModal, onManipulateProduct } = props;

  const {
    inputChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    value: titleValue,
    valueIsValid: titleIsValid,
    hasError: titleInputHasError,
  } = useInput(requireRule);

  const {
    inputChangeHandler: categoryChangeHandler,
    inputBlurHandler: categoryBlurHandler,
    value: categoryValue,
    valueIsValid: categoryIsValid,
    hasError: categoryInputHasError,
  } = useInput(requireRule);

  const {
    inputChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    value: priceValue,
    valueIsValid: priceIsValid,
    hasError: priceInputHasError,
  } = useInput(requireRule);

  const {
    inputChangeHandler: taxesChangeHandler,
    inputBlurHandler: taxesBlurHandler,
    value: taxesValue,
    valueIsValid: taxesIsValid,
    hasError: taxesInputHasError,
  } = useInput(requireRule);

  const {
    inputChangeHandler: adsChangeHandler,
    value: adsValue,
    valueIsValid: adsIsValid,
  } = useInput(requireRule);

  const {
    inputChangeHandler: discountChangeHandler,
    value: discountValue,
    valueIsValid: discountIsValid,
  } = useInput(requireRule);

  const {
    inputChangeHandler: quantityChangeHandler,
    inputBlurHandler: quantityBlurHandler,
    value: quantityValue,
    valueIsValid: quantityIsValid,
    hasError: quantityInputHasError,
  } = useInput(requireRule);

  const formIsValid =
    titleIsValid &&
    categoryIsValid &&
    priceIsValid &&
    taxesIsValid &&
    quantityIsValid;

  // Price Information
  const priceInfo = useMemo(() => {
    return {
      price: priceValue,
      hasTax: taxesIsValid,
      tax: taxesValue,
      hasAds: adsIsValid,
      ads: adsValue,
      hasDiscount: discountIsValid,
      discount: discountValue,
    };
  }, [
    priceValue,
    taxesIsValid,
    taxesValue,
    adsIsValid,
    adsValue,
    discountIsValid,
    discountValue,
  ]);

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      console.log(true);
      return;
    }

    const productData = {
      title: titleValue,
      category: categoryValue,
      price: priceValue,
      tax: taxesValue,
      ads: adsValue ? adsValue : 0,
      discount: discountValue ? discountValue : 0,
      quantity: quantityValue,
      total: getTotalPrice(priceInfo),
    };

    // Call onAddProduct function
    onManipulateProduct(productData);
  };

  useEffect(() => {
    if (!priceValue) {
      setTotalPrice(0);
      return;
    } else {
      const totalTimer = setTimeout(() => {
        setTotalPrice(parseFloat(getTotalPrice(priceInfo)).toFixed(2));
      }, 300);

      // Clean Up Function
      return () => clearTimeout(totalTimer);
    }
  }, [priceInfo, priceValue]);

  return (
    <form onSubmit={submitHandler}>
      <InputGroup>
        <Input
          input={{
            type: "text",
            name: "title",
            placeholder: "product title",
            onChange: titleChangeHandler,
            onBlur: titleBlurHandler,
            value: titleValue,
          }}
          invalid={titleInputHasError}
          errorMessage={titleInputHasError && "title require"}
        />
        <Input
          input={{
            type: "text",
            name: "category",
            placeholder: "product category",
            onChange: categoryChangeHandler,
            onBlur: categoryBlurHandler,
            value: categoryValue,
          }}
          invalid={categoryInputHasError}
          errorMessage={categoryInputHasError && "category require"}
        />
      </InputGroup>
      <InputGroup>
        <Input
          input={{
            type: "number",
            name: "price",
            placeholder: "product price",
            onChange: priceChangeHandler,
            onBlur: priceBlurHandler,
            value: priceValue,
            min: 1,
          }}
          invalid={priceInputHasError}
          errorMessage={priceInputHasError && "price require"}
        />
        <Input
          input={{
            type: "number",
            name: "taxes",
            placeholder: "product taxes",
            onChange: taxesChangeHandler,
            onBlur: taxesBlurHandler,
            value: taxesValue,
            min: 1,
          }}
          invalid={taxesInputHasError}
          errorMessage={taxesInputHasError && "tax require"}
        />
        <Input
          input={{
            type: "number",
            name: "ads",
            placeholder: "product ads",
            onChange: adsChangeHandler,
            value: adsValue,
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
            onChange: discountChangeHandler,
            value: discountValue,
            min: 0,
          }}
        />
        <Input
          input={{
            type: "number",
            name: "quantity",
            placeholder: "product quantity",
            onChange: quantityChangeHandler,
            onBlur: quantityBlurHandler,
            value: quantityValue,
            min: 1,
          }}
          invalid={quantityInputHasError}
          errorMessage={quantityInputHasError && "quantity require"}
        />
      </InputGroup>
      <FormActions
        onCloseModal={onHideModal}
        disabled={!formIsValid}
        title={!formIsValid && "Enter Required Data"}
        btnTitle="add"
        total={totalPrice}
      />
    </form>
  );
};

export default AddForm;

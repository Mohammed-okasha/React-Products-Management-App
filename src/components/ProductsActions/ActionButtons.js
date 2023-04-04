import Button from "../../UI/Button";

const ActionButtons = (props) => {
  const hasNoProducts = props.productsCount === 0;
  const cssStyle = { display: "flex", justifyContent: "space-between" };

  return (
    <div style={cssStyle}>
      <Button onClick={props.onShowAddModal}>add product</Button>
      <Button
        isDeleteBtn={true}
        onClick={props.onShowClearModal}
        disabled={hasNoProducts}
      >
        delete all ({props.productsCount})
      </Button>
    </div>
  );
};

export default ActionButtons;

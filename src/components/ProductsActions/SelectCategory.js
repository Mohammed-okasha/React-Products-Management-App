const SelectCategory = (props) => {
  return (
    <div>
      <h4>filter products by category</h4>
      <select
        name="filter products"
        defaultValue="all"
        onChange={props.onSelectOption}
        disabled={props.disabled}
        title={props.title || undefined}
      >
        {props.options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCategory;

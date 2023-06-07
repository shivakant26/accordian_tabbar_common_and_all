const Dropdown = ({
  onSelect,
  value,
  data,
  label,
}) => {
  return (
    <>
      <select onChange={onSelect} value={value}>
        <option value="none">---Select {label}---</option>
        {data?.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default Dropdown;

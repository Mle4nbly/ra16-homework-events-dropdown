import { useState } from "react";

const DropdownItem = ({ item, isSelected, onItem }) => {
  return (
    <li
      className={item === isSelected ? "active" : null}
      onClick={() => onItem(item)}
    >
      <a href="#">{item}</a>
    </li>
  );
};

function DropdownList({ items }) {
  const [isSelected, setSelected] = useState(null);

  const handleItem = (item) => {
    setSelected(item);

    console.log(item);
  };

  return (
    <ul className="dropdown">
      {items.map((item, index) => (
        <DropdownItem
          key={index}
          item={item}
          isSelected={isSelected}
          onItem={handleItem}
        />
      ))}
    </ul>
  );
}

export default DropdownList;

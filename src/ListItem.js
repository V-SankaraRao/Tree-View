import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function ListItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState(false);

  const handleToggleChildren = () => {
    setDisplayCurrentChildren(!displayCurrentChildren);
  };

  return (
    <li>
      <div className="child">
        <p>{item.label}</p>
        {item.children && item.children.length > 0 && (
          <span onClick={handleToggleChildren}>
            {displayCurrentChildren ? <FaMinus color="#000" /> : <FaPlus color="#000" />}
          </span>
        )}
      </div>
      {item.children && item.children.length > 0 && displayCurrentChildren && (
        <ul>
          {item.children.map((child, index) => (
            <ListItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

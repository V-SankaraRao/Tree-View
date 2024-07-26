import React from "react";
import ListItem from "./ListItem";

export default function List({ list = [] }) {
  return (
    <ul className="parent">
        <h1>Menu View</h1>
      {list.map((menuItem, index) => (
        <ListItem key={index} item={menuItem} />
      ))}
    </ul>
  );
}

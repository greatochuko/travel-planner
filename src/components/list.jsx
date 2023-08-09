import React, { useState } from "react";
import Item from "./item";
import Actions from "./actions";

export default function List({ itemList, setItemList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = itemList;
  }
  if (sortBy === "description") {
    sortedItems = itemList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = itemList
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  function handleDelete(id) {
    setItemList(itemList.slice().filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    console.log(id);
    setItemList(
      itemList.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => {
          return (
            <Item
              item={item}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
      <Actions
        setSortBy={setSortBy}
        setItemList={setItemList}
        sortBy={sortBy}
      />
    </div>
  );
}

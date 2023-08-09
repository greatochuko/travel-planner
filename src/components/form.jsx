import React, { useState } from "react";
import createArray from "./create-array";
const myArr = createArray(20);

export default function Form({ itemList, setItemList }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function addItem(e) {
    e.preventDefault();
    const date = new Date();
    const newItem = {
      id: date,
      description: description,
      quantity: quantity,
      packed: false,
    };
    setItemList([...itemList, newItem]);
    setQuantity(1);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={addItem}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {myArr.map((num) => {
          return <option key={num}>{num}</option>;
        })}
      </select>
      <input
        placeholder="Add something..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

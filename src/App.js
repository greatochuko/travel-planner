import React, { useState } from "react";
import createArray from "./create-array";

const myArr = createArray(20);

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Shoes", quantity: 3, packed: false },
];

export default function App() {
  const [itemList, setItemList] = useState(initialItems);

  return (
    <div className="app">
      <Header />
      <Form itemList={itemList} setItemList={setItemList} />
      <List itemList={itemList} setItemList={setItemList} />
      <Stats />
    </div>
  );
}

function Header() {
  return <h1>🌴My Travel Planner💼</h1>;
}

function Form({ itemList, setItemList }) {
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
  }

  return (
    <form className="add-form" onSubmit={addItem}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {myArr.map((num) => {
          return <option>{num}</option>;
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

function List({ itemList, setItemList }) {
  function handleDelete(id) {
    setItemList(itemList.slice().filter((item) => item.id !== id));
  }

  return (
    <div className="list">
      <ul>
        {itemList.map((item) => {
          return (
            <li>
              <input type="checkbox" />
              <span>
                {item.quantity} {item.description}
              </span>
              <button onClick={() => handleDelete(item.id)}>❌</button>
            </li>
          );
        })}
      </ul>
      <div className="actions">
        <select>
          <option>Sort by Input Order</option>
          <option>Sort by Description</option>
          <option>Sort by Packed Status</option>
        </select>
        <button>Clear List</button>
      </div>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      Start adding some items to your packing list 🚀
    </footer>
  );
}

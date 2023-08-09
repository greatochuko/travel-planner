import React, { useState } from "react";
import createArray from "./create-array";

const myArr = createArray(20);

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  const [itemList, setItemList] = useState(initialItems);

  return (
    <div className="app">
      <Header />
      <ItemForm currentList={itemList} setItemFunction={setItemList} />
      <List currentList={itemList} />
    </div>
  );
}

function List(props) {
  return (
    <div className="list">
      <ul>
        {props.currentList.map((item) => {
          return (
            <Item
              quantity={item.quantity}
              key={item.id}
              item={item.description}
              description={item.description}
            />
          );
        })}
      </ul>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>🌴 Travel Planner 💼</h1>
    </header>
  );
}

function ItemForm(props) {
  const [itemNumber, setItemNumber] = useState(1);
  const [item, setItem] = useState("");

  function addItem(event) {
    event.preventDefault();
    if (item !== "") {
      console.log("Item Number: ", itemNumber, "Item: ", item);
      props.setItemFunction([
        ...props.currentList,
        {
          id: 3,
          description: item,
          quantity: Number(itemNumber),
          packed: false,
        },
      ]);
      setItem("");
      setItemNumber(1);
    }
  }

  return (
    <form className="add-form" onSubmit={addItem}>
      <select
        value={itemNumber}
        onChange={(event) => setItemNumber(event.target.value)}
      >
        {myArr.map((num) => {
          return (
            <option key={num} value={num}>
              {num}
            </option>
          );
        })}
      </select>
      <input
        type="text"
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

function Item({ quantity, description, isPacked }) {
  return (
    <li className={isPacked ? "is-packed" : ""}>
      <input type="checkbox" />
      {quantity} {description}
      <button>❌</button>
    </li>
  );
}

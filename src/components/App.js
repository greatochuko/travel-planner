import React, { useState } from "react";
import Header from "./header";
import Form from "./form";
import List from "./list";
import Stats from "./stats";

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
      <Stats itemList={itemList} />
    </div>
  );
}

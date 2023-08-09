export default function Stats({ itemList }) {
  const itemListLength = itemList.length;
  const itemPacked = itemList.filter((item) => item.packed === true).length;
  const itemPackedPercent = Math.round((itemPacked / itemListLength) * 100);

  if (itemListLength === 0) {
    return (
      <footer className="stats">
        Start adding some items to your packing list 🚀
      </footer>
    );
  }
  return (
    <footer className="stats">
      {itemPackedPercent === 100
        ? "You got everything! Ready to go ✈️"
        : `💼 You have ${itemListLength} items on your list, and you already packed ${itemPacked} (${itemPackedPercent}%)`}
    </footer>
  );
}

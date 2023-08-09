export default function Actions({ setSortBy, setItemList, sortBy }) {
  function handleClearList() {
    setItemList([]);
  }
  return (
    <div className="actions">
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by Input Order</option>
        <option value="description">Sort by Description</option>
        <option value="packed">Sort by Packed Status</option>
      </select>
      <button onClick={handleClearList}>Clear List</button>
    </div>
  );
}

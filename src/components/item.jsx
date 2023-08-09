export default function Item({ item, handleToggle, handleDelete }) {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => handleToggle(item.id)}
      />
      <span className={item.packed ? "packed" : ""}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
}

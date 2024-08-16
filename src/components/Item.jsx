function Item({ item, onDeleteItem, onToggleItem }) {
    return (
        <li key={item.id}>
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => onToggleItem(item.id, item.checked)}
            />
            <span
                style={item.checked ? { textDecoration: "line-through" } : {}}
            >
                {item.quantity} <b className="item-name">{item.name}</b> @
                {item.price} Rp.
                {item.price * item.quantity}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>&times;</button>
        </li>
    );
}

export default Item;

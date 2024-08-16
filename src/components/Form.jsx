import { useState } from "react";
function Form({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!name) {
            alert("Nama barang harus diisi");
            return;
        }
        if (!price) {
            alert("Harga harus diisi");
            return;
        }
        const newItem = {
            name,
            quantity,
            price,
            checked: false,
            id: Date.now(),
        };
        onAddItem(newItem);
        setName("");
        setQuantity(1);
        setPrice("");
    }

    const quantityNum = [...Array(20)].map((_, i) => (
        <option key={i + 1} value={i + 1}>
            {i + 1}
        </option>
    ));

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>Hari ini belanja apa kita?</h3>
            <div>
                <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                >
                    {quantityNum}
                </select>
                <input
                    type="text"
                    placeholder="Nama barang..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Harga"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <button>Tambah</button>
        </form>
    );
}
export default Form;

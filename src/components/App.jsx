/* eslint-disable no-unused-vars */
import { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import GroceryList from "./GroceryList";
import Footer from "./Footer";
const groceryItems = [
    {
        id: 1,
        name: "Kopi Bubuk",
        quantity: 2,
        price: 10000,
        checked: true,
    },
    {
        id: 2,
        name: "Gula Pasir",
        quantity: 5,
        price: 15000,
        checked: false,
    },
    {
        id: 3,
        name: "Air Mineral",
        quantity: 3,
        price: 20000,
        checked: false,
    },
];
export default function App() {
    const [items, setItems] = useState(groceryItems);

    function handleAddItem(item) {
        setItems([...items, item]);
    }

    function hanldeDeleteItem(id) {
        const warning = confirm("Apakah anda yakin");
        if (!warning) {
            return;
        }
        setItems((items) => items.filter((item) => item.id !== id));
    }

    function handleToggleItem(id, checked) {
        let label = "menandai SELESAI";
        if (checked) {
            label = "menandai BELUM SELESAI";
        }
        const warning = confirm(`Apakah Anda yakin ${label}?`);
        if (!warning) {
            return;
        }
        setItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    }

    function handleClearItems() {
        setItems([]);
    }

    function handleRefresh() {
        location.reload();
    }
    return (
        <div className="app">
            <Header />
            <Form onAddItem={handleAddItem} />
            <GroceryList
                items={items}
                onDeleteItem={hanldeDeleteItem}
                onToggleItem={handleToggleItem}
                onClearItems={handleClearItems}
                onRefresh={handleRefresh}
            />
            <Footer items={items} />
        </div>
    );
}

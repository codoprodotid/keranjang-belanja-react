function Footer({ items }) {
    if (items.length === 0)
        return (
            <footer className="stats">Daftar belanjaan masih kosong!</footer>
        );
    const totalItems = items.length;
    const checkedItems = items.filter((item) => item.checked);
    const totalChecked = checkedItems.length;
    const percentage = Math.round((totalChecked / totalItems) * 100);
    let totalPrice = 0;

    checkedItems.map((item) => {
        totalPrice += Number(item.quantity * item.price);
    });

    return (
        <footer className="stats">
            Ada {totalItems} barang di daftar belanjaan {totalChecked} barang
            sudah dibeli ({percentage}%) dengan nominal Rp.{totalPrice}
        </footer>
    );
}

export default Footer;

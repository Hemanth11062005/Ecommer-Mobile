const cartData = [];

function addToCart(itemIndex) {
    const items = [
        { name: "Iphone 14 Pro Max", spec: "8GB Ram, 128GB Storage", image: "iPhone-14-Pro-Max-PNG.png", price: 999 },
        { name: "Iphone 14 Pro Max", spec: "8GB Ram, 256GB Storage", image: "iPhone-14-Pro-Max-PNG.png", price: 1099 },
        { name: "Iphone 14 Pro Max", spec: "8GB Ram, 512GB Storage", image: "iPhone-14-Pro-Max-PNG.png", price: 1299 },
        { name: "Iphone 12 Pro Max", spec: "8GB Ram, 128GB Storage", image: "iphone_12_PNG19.png", price: 799 },
        { name: "Iphone 12 Pro Max", spec: "8GB Ram, 256GB Storage", image: "iphone_12_PNG19.png", price: 899 },
        { name: "Iphone 12 Pro Max", spec: "8GB Ram, 512GB Storage", image: "iphone_12_PNG19.png", price: 1099 }
    ];
    cartData.push(items[itemIndex]);
    localStorage.setItem('cart', JSON.stringify(cartData));
}

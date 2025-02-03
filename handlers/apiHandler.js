exports.getUser = (req, res) => {
    res.json({ id: 1, name: "John Doe" });
};

exports.createUser = (req, res) => {
    res.json({ message: "User created", data: req.body });
};

// handlers/productHandler.js
exports.getProduct = (req, res) => {
    res.json({ id: 101, name: "Laptop", price: 1200 });
};

exports.createProduct = (req, res) => {
    res.json({ message: "Product created", data: req.body });
};

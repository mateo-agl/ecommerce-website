require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { 
    productList, 
    currencies,
    prices,
    galleries,
    attributes,
    descriptions,
    categories
} = require("./data");
const port = process.env.PORT || 8080;

if(process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
} else {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        next();
    });
};

app.get("/products?:id", (req, res) => {
    const products = productList.map((p, i) => {
        p["attributes"] = attributes[i] 
            ? attributes[i].map(att => {
                const items = att.items.map((item, i) => (
                    ({...item, selected: i === 0 ? true : false})
                ));
                return { ...att, items };
            })
            : [];
        p["description"] = descriptions[i];
        p["prices"] = currencies.map(c => (
            { currency: c, amount: (c.conversion * prices[i]).toFixed(2) }
        ));
        p["gallery"] = galleries[i];
        return p;
    });

    if(req.query.id) {
        const prod = products.find(p => p.id === req.query.id);
        return res.send(prod);
    }
    res.send(products);
});

app.get("/currencies", (req, res) => res.send(currencies));

app.get("/categories", (req, res) => res.send(categories));

app.get("/*", (req, res) => res.sendFile(path.resolve("build/index.html")));

app.listen(port, () => console.log(`App listening on port ${port}`));
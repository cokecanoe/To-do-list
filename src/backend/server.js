const express = require("express");
const app = express();
const path = require("path")

app.get('/', (req, res) => {
res.sendfile(path.resolve("../frontend/index.html"))
});

app.listen(8080, () => {
    console.log("listening on port 8080")
});


const express = require("express");
const app = express();
const port = 3000;

const Human = {
    height : 50,
    weight : 100
};

app.get('/', (req, res) => { res.send(Human) });
app.post('/', (req, res) => { Human.height = req.body});
app.listen(port, () => { console.log("Hi I am listening to Port") });
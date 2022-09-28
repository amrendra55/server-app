const express = require("express");
const app = express();

const Human = {
    height : 50,
    weight : 100
};

app.get('/', (req, res) => { res.send(Human) });
app.post('/', (req, res) => { Human.height = req.body});
app.listen(process.env.PORT || 3001, '0.0.0.0', () => { console.log("Hi I am listening to Port") });
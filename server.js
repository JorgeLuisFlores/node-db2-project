const express = require('express');
const server = express();
const carsRouter = require("./cars/carsRouter.js");

server.use(express.json());

server.use('/cars', carsRouter);

server.get("/", (req, res) => {
    res.send(`<h2>Welcome to this API!</h2>`);
});

module.exports = server;
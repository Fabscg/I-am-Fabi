const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';
const express = require("express")

const server = express({ server })
    .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
const { Server } = require('wss');

const wss = new Server({ server });
wss.on('connection', (wss) => {
    console.log('Client connected');
    wss.on('close', () => console.log('Client disconnected'));
});
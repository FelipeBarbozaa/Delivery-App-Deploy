const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (_req, res) => res.status(200).json({ message: 'working' }));

module.exports = app;
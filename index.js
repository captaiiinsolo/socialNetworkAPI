const express = require('express');
const db = require('./config/connection');

const { Thought, User} = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.once('open', (err) => {
    if (err) throw err;
    app.listen(PORT, () => {
        console.log(`Social Network API server running on port ${PORT}!`);
    });
});
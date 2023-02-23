const express = require('express');
const db = require('./config/connection');

const { Thought, User} = require('./models');

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enter Routes Here


db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Social Network API server running on port ${PORT}!`);
    });
});
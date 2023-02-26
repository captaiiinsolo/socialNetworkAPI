const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { faker } = require('@faker-js/faker');

connection.on('error', (err) => console.log(err));

connection.once('open', async () => {
    console.log('connected to db');
    
    await User.deleteMany({});

    await Thought.deleteMany({});

    // create empty array for users created with faker
    const users = [];

    for (let i = 0; i < 10; i++) {
        users.push({
            username: faker.internet.userName(),
            email: faker.internet.email(),
        });
    }

    // create empty array for thoughts created with faker
    const thoughts = [];

    for (let i = 0; i < 10; i++) {
        thoughts.push({
            thoughtText: faker.lorem.sentence(),
            username: faker.internet.userName(),
            createdAt: new Date(),
        });
    }

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info(`seeded ${users.length} users`);
    process.exit(0);
    
});

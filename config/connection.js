const { connect, connection } = require('mongoose');

// establish connection with mongoDB database
connect('mongodb://localhost/socialNetworkDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;
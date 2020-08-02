// Dependencies
const { MongoClient } = require('mongodb');

// Connection
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017';

// Database Name
const DB_NAME  = "animal-shelter";

// Collections Name
const COLLECTIONS = {
    ANIMALS: 'animals',
}

const client = new MongoClient(MONGO_URL, { useUnifiedTopology: true});

module.exports = {
    async connect () {
        const connection = await client.connect();
        console.log('Connected to MongoDB');
        const db = connection.db(DB_NAME);
        this.animals = db.collection(COLLECTIONS.ANIMALS);
    },
    disconnect () {
        return client.close();
    }
};

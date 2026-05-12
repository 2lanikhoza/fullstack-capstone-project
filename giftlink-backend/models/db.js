const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/giftlink';
const client = new MongoClient(url);

let db;

async function connectToDatabase() {
  if (db) {
    return db;
  }

  await client.connect();

  db = client.db('giftlink');
  return db;
}

module.exports = connectToDatabase;
require('dotenv').config();

const database = {
  CONNECTION: process.env.CONNECTION_URL,
};

export default database;

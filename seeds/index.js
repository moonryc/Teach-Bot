require('dotenv').config({ path: '../.env' });
const seedUser = require('./user-seeds');
const seedMessage = require('./message-seeds');
const seedQuestion = require('./question-seeds');

const sequelize = require('../config/connection');

const statusUpdate = (message) => {
  console.log('======================');
  console.log(message);
  console.log('======================');
};

const seedAll = async () => {
  await sequelize.sync({ force: true });
  statusUpdate('DATABASE SYNCED');
  try {
    await seedUser();
    statusUpdate('USERS SEEDED');

    await seedQuestion();
    statusUpdate('QUESTIONS SEEDED');

    await seedMessage();
    statusUpdate('MESSAGES SEEDED');
  } catch (e) {
    statusUpdate(e);
  }
  statusUpdate('EVERYTHING HAS BEEN SEEDED SUCCESSFULLY');
  process.exit(0);
};

try {
  (async () => {
    await seedAll();
  })();
} catch (e) {
  statusUpdate(e);
}

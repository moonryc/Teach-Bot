import dotenv from 'dotenv';
dotenv.config();
// dotenv.config({ path: '../.env' });
import sequelize from '../config/connection';
import seedUser from './user-seeds';
import seedMessage from './message-seeds';
import seedTopic from './topic-seeds';

const statusUpdate = (message: string | any) => {
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
  } catch (e) {
    statusUpdate(e);
  }
  try {
    await seedTopic();
    statusUpdate('TOPIC SEEDED');
  } catch (e) {
    statusUpdate(e);
  }

  try {
    await seedMessage();
    statusUpdate('MESSAGES SEEDED');
    statusUpdate('EVERYTHING HAS BEEN SEEDED SUCCESSFULLY');
    process.exit(0);
  } catch (e) {
    statusUpdate(e);
  }
};

try {
  (async () => {
    await seedAll();
  })();
} catch (e) {
  statusUpdate(e);
}

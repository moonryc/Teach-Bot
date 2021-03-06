import { User } from '../models';
import bcrypt from 'bcrypt';

const userData = [
  {
    username: 'john',
    email: 'john@beatles.com',
    password: bcrypt.hashSync('lennon', 10),
  },
  {
    username: 'paul',
    email: 'paul@beatles.com',
    password: bcrypt.hashSync('mcartney', 10),
  },
  {
    username: 'ringo',
    email: 'ringo@beatles.com',
    password: bcrypt.hashSync('star', 10),
  },
  {
    username: 'george',
    email: 'george@beatles.com',
    password: bcrypt.hashSync('harrison', 10),
  },
  {
    username: 'yoko',
    email: 'yoko@beatles.com',
    password: bcrypt.hashSync('ono', 10),
  },
];

const seedUser = () => User.bulkCreate(userData);

export default seedUser;

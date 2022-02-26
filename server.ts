import dotenv from 'dotenv';

dotenv.config();
import sequelize from './config/connection';
import routes from './controllers';
import helpers from './utils/helpers';

//3rd party imports
import express from 'express';
import path from 'path';
import expressHandleBars from 'express-handlebars';
import session from 'express-session';
//TODO convert to ESM
const SequelizeStore = require('connect-session-sequelize')(session.Store);
import logger from 'morgan';

//extra setups
const handlebars = expressHandleBars.create({ helpers });

const sessionSetup = {
  secret: <string>process.env.SESSION_SECRET,
  cookie: {
    maxAge: parseInt(process.env.COOKIE_AGE_MINUTES || '5') * 60 * 1000,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const PORT = process.env.PORT || 3001;
const app = express();

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`NOW LISTENING ON PORT: ${PORT}`));
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use(session(sessionSetup));
app.use(logger('dev'));

app.use(routes);

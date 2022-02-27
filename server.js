"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connection_1 = __importDefault(require("./config/connection"));
const controllers_1 = __importDefault(require("./controllers"));
const helpers_1 = __importDefault(require("./utils/helpers"));
//3rd party imports
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const express_session_1 = __importDefault(require("express-session"));
//TODO convert to ESM
const SequelizeStore = require('connect-session-sequelize')(express_session_1.default.Store);
const morgan_1 = __importDefault(require("morgan"));
//extra setups
const handlebars = express_handlebars_1.default.create({ helpers: helpers_1.default });
const sessionSetup = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: parseInt(process.env.COOKIE_AGE_MINUTES || '5') * 60 * 1000,
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: connection_1.default,
    }),
};
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
connection_1.default.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`NOW LISTENING ON PORT: ${PORT}`));
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.use((0, express_session_1.default)(sessionSetup));
app.use((0, morgan_1.default)('dev'));
app.use(controllers_1.default);

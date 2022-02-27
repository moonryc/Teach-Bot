"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
dotenv_1.default.config();
let sequelize;
//create connection to the db
if (process.env.JAWSDB_URL) {
    console.log('using jaws');
    sequelize = new sequelize_1.Sequelize(process.env.JAWSDB_URL, {
        logging: process.env.SEQUELIZE_LOGGING === 'true',
    });
}
else {
    console.log('using local');
    console.log(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW);
    sequelize = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,
        logging: process.env.SEQUELIZE_LOGGING === 'true',
    });
}
exports.default = sequelize;

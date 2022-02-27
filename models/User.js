"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../config/connection"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class User extends sequelize_1.Model {
    isPasswordValid(submittedPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcrypt_1.default.hash(submittedPassword, this.password);
        });
    }
}
User.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            //username length is greater than 4
            len: [4, 10],
        },
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            //password length is greater than 4
            len: [4, 10],
        },
    },
}, {
    hooks: {
        // @ts-ignore
        beforeCreate: (newUserData) => __awaiter(void 0, void 0, void 0, function* () {
            newUserData.password = yield bcrypt_1.default.hash(newUserData.password, 10);
            return newUserData;
        }),
        // @ts-ignore
        beforeUpdate: (updatedUserData) => __awaiter(void 0, void 0, void 0, function* () {
            updatedUserData.password = yield bcrypt_1.default.hash(updatedUserData.password, 10);
            return updatedUserData;
        }),
    },
    sequelize: connection_1.default,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
});
exports.default = User;

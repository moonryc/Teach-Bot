import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

class Message extends Model {}

Message.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'question',
        key: 'id',
      },
    },
    question_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'message',
  }
);

export default Message;

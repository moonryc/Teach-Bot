import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection';

class Topic extends Model {
  declare id: number;
  declare user_id: number;
  declare topic: string;
}

Topic.init(
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
    topic: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'topic',
  }
);

export default Topic;

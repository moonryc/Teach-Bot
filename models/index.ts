import User from './User';
import Message from './Message';
import Topic from './Topic';

//create associations below

User.hasMany(Message, {
  foreignKey: 'user_id',
});

User.hasMany(Topic, {
  foreignKey: 'user_id',
});

Topic.hasMany(Message, {
  foreignKey: 'topic_id',
  onDelete: 'cascade',
});

Message.belongsTo(User, {
  foreignKey: 'user_id',
});

Topic.belongsTo(User, {
  foreignKey: 'user_id',
});

Message.belongsTo(Topic, {
  foreignKey: 'topic_id',
});

export { User, Message, Topic };

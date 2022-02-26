import User from './User';
import Message from './Message';
import Question from './Question';

//create associations below

User.hasMany(Message, {
  foreignKey: 'user_id',
});

User.hasMany(Question, {
  foreignKey: 'user_id',
});

Question.hasMany(Message, {
  foreignKey: 'question_id',
});

Message.belongsTo(User, {
  foreignKey: 'user_id',
});

Question.belongsTo(User, {
  foreignKey: 'user_id',
});

Message.belongsTo(Question, {
  foreignKey: 'question_id',
});

export { User, Message, Question };

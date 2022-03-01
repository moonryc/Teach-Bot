import { Message } from '../models';

const messageData = [
  {
    user_id: 1,
    topic_id: 1,
    question_text: '\nYou: How do you add an object to an array?',
    answer_text:
      '\nTeachBot: Ok, great topic. First you need to add a variable, let say its called JSarray. Then you need to define it, like so. var i =0; Next, you need to define the array itself like so. var JSarray = []; Finally, when you want to add to an array, you need to add the JSarray.push. For example. JSarray.push(',
  },
  {
    user_id: 1,
    topic_id: 1,
    question_text: '\nYou: how do you remove and item from an array',
    answer_text:
      '\nTeachBot: Thats easy as well. You first need to access JSarray like so. JSarray = []; Then you need to define the array. var JSarray = []; next, you need to remove the item that you want. JSarray.pop. For example. JSarray.pop(); You: ',
  },
  {
    user_id: 1,
    topic_id: 4,
    question_text: '\nYou: How do you install react',
    answer_text:
      '\nTeachBot: Thats easy as well. First, you need to download react, just go to this website https://reactjs.org and follow the instructions. Then you open up a terminal, and type the following. npm install react-dom You: ',
  },
  {
    user_id: 1,
    topic_id: 2,
    question_text: '\nYou: How do you center a div',
    answer_text:
      '\nTeachBot: centering an Html Div? You use margin: 0 auto; to center it. You center it vertically by top aligning it and horizontally by left aligning it.',
  },
  {
    user_id: 1,
    topic_id: 3,
    question_text: '\nYou: how do you change a divs background color',
    answer_text: '\nTeachBot: background: color',
  },
  {
    user_id: 2,
    topic_id: 1,
    question_text: '\nYou: How do you add an object to an array?',
    answer_text:
      '\nTeachBot: Ok, great topic. First you need to add a variable, let say its called JSarray. Then you need to define it, like so. var i =0; Next, you need to define the array itself like so. var JSarray = []; Finally, when you want to add to an array, you need to add the JSarray.push. For example. JSarray.push(',
  },
  {
    user_id: 2,
    topic_id: 1,
    question_text: '\nYou: how do you remove and item from an array',
    answer_text:
      '\nTeachBot: Thats easy as well. You first need to access JSarray like so. JSarray = []; Then you need to define the array. var JSarray = []; next, you need to remove the item that you want. JSarray.pop. For example. JSarray.pop(); You: ',
  },
  {
    user_id: 2,
    topic_id: 4,
    question_text: '\nYou: How do you install react',
    answer_text:
      '\nTeachBot: Thats easy as well. First, you need to download react, just go to this website https://reactjs.org and follow the instructions. Then you open up a terminal, and type the following. npm install react-dom You: ',
  },
  {
    user_id: 2,
    topic_id: 2,
    question_text: '\nYou: How do you center a div',
    answer_text:
      '\nTeachBot: centering an Html Div? You use margin: 0 auto; to center it. You center it vertically by top aligning it and horizontally by left aligning it.',
  },
  {
    user_id: 2,
    topic_id: 3,
    question_text: '\nYou: how do you change a divs background color',
    answer_text: '\nTeachBot: background: color',
  },
  {
    user_id: 3,
    topic_id: 1,
    question_text: '\nYou: How do you add an object to an array?',
    answer_text:
      '\nTeachBot: Ok, great topic. First you need to add a variable, let say its called JSarray. Then you need to define it, like so. var i =0; Next, you need to define the array itself like so. var JSarray = []; Finally, when you want to add to an array, you need to add the JSarray.push. For example. JSarray.push(',
  },
  {
    user_id: 3,
    topic_id: 1,
    question_text: '\nYou: how do you remove and item from an array',
    answer_text:
      '\nTeachBot: Thats easy as well. You first need to access JSarray like so. JSarray = []; Then you need to define the array. var JSarray = []; next, you need to remove the item that you want. JSarray.pop. For example. JSarray.pop(); You: ',
  },
  {
    user_id: 3,
    topic_id: 4,
    question_text: '\nYou: How do you install react',
    answer_text:
      '\nTeachBot: Thats easy as well. First, you need to download react, just go to this website https://reactjs.org and follow the instructions. Then you open up a terminal, and type the following. npm install react-dom You: ',
  },
  {
    user_id: 3,
    topic_id: 2,
    question_text: '\nYou: How do you center a div',
    answer_text:
      '\nTeachBot: centering an Html Div? You use margin: 0 auto; to center it. You center it vertically by top aligning it and horizontally by left aligning it.',
  },
  {
    user_id: 3,
    topic_id: 3,
    question_text: '\nYou: how do you change a divs background color',
    answer_text: '\nTeachBot: background: color',
  },
  {
    user_id: 4,
    topic_id: 1,
    question_text: '\nYou: How do you add an object to an array?',
    answer_text:
      '\nTeachBot: Ok, great topic. First you need to add a variable, let say its called JSarray. Then you need to define it, like so. var i =0; Next, you need to define the array itself like so. var JSarray = []; Finally, when you want to add to an array, you need to add the JSarray.push. For example. JSarray.push(',
  },
  {
    user_id: 4,
    topic_id: 1,
    question_text: '\nYou: how do you remove and item from an array',
    answer_text:
      '\nTeachBot: Thats easy as well. You first need to access JSarray like so. JSarray = []; Then you need to define the array. var JSarray = []; next, you need to remove the item that you want. JSarray.pop. For example. JSarray.pop(); You: ',
  },
  {
    user_id: 4,
    topic_id: 4,
    question_text: '\nYou: How do you install react',
    answer_text:
      '\nTeachBot: Thats easy as well. First, you need to download react, just go to this website https://reactjs.org and follow the instructions. Then you open up a terminal, and type the following. npm install react-dom You: ',
  },
  {
    user_id: 4,
    topic_id: 2,
    question_text: '\nYou: How do you center a div',
    answer_text:
      '\nTeachBot: centering an Html Div? You use margin: 0 auto; to center it. You center it vertically by top aligning it and horizontally by left aligning it.',
  },
  {
    user_id: 4,
    topic_id: 3,
    question_text: '\nYou: how do you change a divs background color',
    answer_text: '\nTeachBot: background: color',
  },
  {
    user_id: 5,
    topic_id: 1,
    question_text: '\nYou: How do you add an object to an array?',
    answer_text:
      '\nTeachBot: Ok, great topic. First you need to add a variable, let say its called JSarray. Then you need to define it, like so. var i =0; Next, you need to define the array itself like so. var JSarray = []; Finally, when you want to add to an array, you need to add the JSarray.push. For example. JSarray.push(',
  },
  {
    user_id: 5,
    topic_id: 1,
    question_text: '\nYou: how do you remove and item from an array',
    answer_text:
      '\nTeachBot: Thats easy as well. You first need to access JSarray like so. JSarray = []; Then you need to define the array. var JSarray = []; next, you need to remove the item that you want. JSarray.pop. For example. JSarray.pop(); You: ',
  },
  {
    user_id: 5,
    topic_id: 4,
    question_text: '\nYou: How do you install react',
    answer_text:
      '\nTeachBot: Thats easy as well. First, you need to download react, just go to this website https://reactjs.org and follow the instructions. Then you open up a terminal, and type the following. npm install react-dom You: ',
  },
  {
    user_id: 5,
    topic_id: 2,
    question_text: '\nYou: How do you center a div',
    answer_text:
      '\nTeachBot: centering an Html Div? You use margin: 0 auto; to center it. You center it vertically by top aligning it and horizontally by left aligning it.',
  },
  {
    user_id: 5,
    topic_id: 3,
    question_text: '\nYou: how do you change a divs background color',
    answer_text: '\nTeachBot: background: color',
  },
];

const seedMessage = () => Message.bulkCreate(messageData);

export default seedMessage;

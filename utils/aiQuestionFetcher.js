const axios = require('axios');

const aiQuestionFetcher = async (question) => {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://api.ai21.com/studio/v1/j1-large/complete',
      data: JSON.stringify({
        prompt: question,
        numResults: 1,
        maxTokens: 100, //Max number of characters the AI can respond with
        stopSequences: ['"'], //What is the stopping symbol that the AI will end with
        topKReturn: 0, //DO NOT TOUCH
        temperature: 0.7, //DO NO TOUCH
      }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.AI21_API_KEY}`,
      },
    });

    return response.data.completions[0].data.text;
  } catch (e) {
    console.log(e);
  }
};

module.exports = aiQuestionFetcher;

const a21Handler = async (req, res, next) => {
  const { question } = req.body;

  let prompt =
    'SalBot is your tutor. He has knowledge of javascript, html, css and can answer your questions in a clear and concise manner.' +
    '\nThe following is a conversation between you and SalBot. The conversation will follow the following format' +
    '\nSalBot: "Hello welcome to my tutoring session."' +
    '\nYou: "Thank you."' +
    '\nSalBot: "We can start if you are ready"' +
    '\nYou: "Yes I am ready"';

  //TODO GET MESSAGE HISTORY
  const lastFiveMessages = '';

  const body = {
    prompt: prompt + lastFiveMessages + question,
    numResults: 1,
    maxTokens: 100, //Max number of characters the AI can respond with
    stopSequences: ['"'], //What is the stopping symbol that the AI will end with
    topKReturn: 0, //DO NOT TOUCH
    temperature: 0.7, //DO NO TOUCH
  };

  try {
    const response = await fetch(
      'https://api.ai21.com/studio/v1/j1-large/complete',
      {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.AI21_API_KEY}`,
        },
        body: JSON.stringify(body),
      }
    );

    if (!response.ok) {
      throw await response.json();
    }

    const data = await response.json();

    console.log(data);
    req.body.answer = data.completions[0].data.text.slice(0);
    next();
  } catch (e) {
    console.log(e);
  }
};

module.exports = a21Handler;

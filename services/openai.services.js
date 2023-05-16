const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function talkWithChatGpt(prompt) {
  const completion = await openai.createCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
  });

  console.log(completion);

  return completion.data.choices[0].text;
}

module.exports = { talkWithChatGpt };

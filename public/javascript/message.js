let messageContatiner;

const scrollToBottom = () => {
  messageContatiner = document.getElementById('messages');
  messageContatiner.scrollTop = messageContatiner.scrollHeight;
};

const topic = parseInt(
  window.location.pathname.split('/')[
    window.location.pathname.split('/').length - 1
  ]
);

const submitQuestion = async (e) => {
  e.preventDefault();
  const question = document.querySelector('.message-input').value;

  const response = await fetch(`/api/question/${topic}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question }),
  });

  const body = await response.json();

  if (!response.ok) {
    return alert('response is not okay');
  }

  const messagesEl = document.getElementById('messages');

  const divEl = document.createElement('div');

  if (question) {
    divEl.innerHTML = `<div>
  
<!--  human-->
  <div class="human-message">${question}</div>
<!--  ai-->
  <div class="ai-message">${body.message}</div>
</div>`;
  } else {
    divEl.innerHTML = `<div>
<!--  ai-->
  <div class="ai-message">${body.message}</div>
</div>`;
  }

  messagesEl.append(divEl);

  document.querySelector('.message-input').value = '';
  scrollToBottom();
};

const deleteTopicHandler = async () => {
  const response = await fetch(`/api/question/${topic}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    const body = await response.json();
    return alert(body.message);
  }

  document.location.replace('/chatbot/0');
};

const createTopicHandler = async (e) => {
  e.preventDefault();

  const topic = document.querySelector('#new-topic-field').value;

  const response = await fetch('/api/question/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ topic }),
  });

  const body = await response.json();
  if (!response.ok) {
    return alert(body);
  }

  const topicsEl = document.getElementById('topics-scroll');

  const divEl = document.createElement('div');

  divEl.innerHTML = `<a href="/chatbot/${body.id}">${topic}</a>`;
  topicsEl.append(divEl);
};

document
  .querySelector('#new-topic')
  .addEventListener('submit', (e) => createTopicHandler(e));

if (topic !== 0) {
  document
    .querySelector('.clear-history')
    .addEventListener('click', deleteTopicHandler);

  document
    .querySelector('#questionForm')
    .addEventListener('submit', (e) => submitQuestion(e));

  scrollToBottom();
}

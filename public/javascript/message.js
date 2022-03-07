const submitQuestion = async (e) => {
  e.preventDefault();

  const topic =
    window.location.pathname.split('/')[
      window.location.pathname.split('/').length - 1
    ];
  const question = document.querySelector('.message-input').value;

  if (!question) {
    return alert('Please submit a non-empty message');
  }

  const response = await fetch(`/api/question/${topic}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question }),
  });

  const body = await response.json();

  if (!response.ok) {
    alert('response is not okay');
  }

  const messagesEl = document.getElementById('messages');

  messagesEl.append(`<div>
  
<!--  human-->
  <div class="human-message">${question}</div>
<!--  ai-->
  <div class="ai-message">${body.message}</div>
</div>`);
};

document
  .querySelector('#questionForm')
  .addEventListener('submit', (e) => submitQuestion(e));

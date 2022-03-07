async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username: email,
        password: password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/chatbot/0');
    } else {
      alert(response.statusText);
    }
  }
}

const signupHandler = async (e) => {
  e.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (!email || !password || !username) {
    return alert('something was left blank when attempting to sign up');
  }
  const response = await fetch('/api/users/', {
    method: 'POST',
    body: JSON.stringify({
      username, email, password
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  const data = await response.json();

  if(!response.ok){
    console.log(data);
    return alert(data.message);
  }

  window.location.replace('/chatbot/0');
  console.log(data);

};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);


document
  .querySelector('.signup-form')
  .addEventListener('submit', (e) => signupHandler(e));
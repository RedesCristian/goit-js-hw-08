import throttle from 'lodash.throttle';
const formular = document.querySelector('.feedback-form');
const mailInput = formular.querySelector('input[type="email"]');
const messageInput = formular.querySelector('textarea[name="message"]');

let inputObject = {
  email: '',
  message: '',
};
const feedbackKey = 'feedback-form-state';

const loadData = throttle(function () {
  mailInput.addEventListener('input', event => {
    inputObject.email = event.currentTarget.value;
    console.log(inputObject);
    localStorage.setItem(feedbackKey, JSON.stringify(inputObject));
  });
  messageInput.addEventListener('input', event => {
    inputObject.message = event.currentTarget.value;
    console.log(inputObject);
    localStorage.setItem(feedbackKey, JSON.stringify(inputObject));
  });
}, 500);
loadData();
const savedData = JSON.parse(localStorage.getItem(feedbackKey));
mailInput.value = savedData.email;
messageInput.value = savedData.message;

formular.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(feedbackKey);
  let newObject = {
    email: '',
    message: '',
  };
  newObject.email = mailInput.value;
  newObject.message = messageInput.value;
  formular.reset();
});

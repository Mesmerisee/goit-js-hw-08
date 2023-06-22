import LodashThrottle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');

const formKey = "feedback-form-state";

formEl.addEventListener('input', LodashThrottle(onInput, 500));
formEl.addEventListener('submit', onSubmit);

let formData = JSON.parse(localStorage.getItem(formKey));
const { email, message } = formEl.elements;
reload();

function reload() {
    if (formData) {
      email.value = formData.email || '';
      message.value = formData.message || '';
    }
  }

function onInput(e) {
  formData = { email: email.value, message: message.value };
  localStorage.setItem(formKey, JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });

  localStorage.removeItem(formKey);
  e.currentTarget.reset();
  formData = {};
}